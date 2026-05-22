import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import { Resend } from "resend";
import { BookingEmailTemplate } from "./src/emails/BookingEmail";
import { render } from "@react-email/render";
import React from "react";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Add JSON body parsing middleware
  app.use(express.json());

  const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

  // API routes
  app.post("/api/send-email", async (req, res) => {
    // Basic API Key validation
    if (!resend) {
      return res.status(500).json({ error: "Resend API key missing on server" });
    }

    const { name, email, description } = req.body;
    
    if (!name || !email || !description) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      const emailHtml = await render(
        React.createElement(BookingEmailTemplate, { name, email, description })
      );

      const { data, error } = await resend.emails.send({
        from: `Demo Form <onboarding@resend.dev>`, // Resend's required default sender domain, you can change this if you verified your domain with Resend
        to: process.env.CONTACT_EMAIL || "dmakito662@gmail.com", // Send to user's email
        subject: `New Project Inquiry from ${name}`,
        html: emailHtml,
      });

      if (error) {
        return res.status(400).json({ error });
      }

      res.status(200).json({ data });
    } catch (err: unknown) {
      console.error(err);
      res.status(500).json({ error: "Failed to send email" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    // Provide fallback for SPA
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
