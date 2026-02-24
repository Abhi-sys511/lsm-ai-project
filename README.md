# 🚀 AI-Powered LMS SaaS Platform

A full-stack AI-powered Learning Management System (LMS) built using modern web technologies.  
Users can enroll in courses, watch video lessons, generate AI summaries, download notes, and interact with an AI Tutor.

---

## 🔥 Live Features

- ✅ Course & Module Management
- ✅ Video Lessons (Mux integration)
- ✅ AI Lesson Summary Generator
- ✅ Downloadable AI-generated Notes
- ✅ AI Tutor Assistant (Context-aware)
- ✅ Progress Tracking
- ✅ Authentication & Role-Based Access
- ✅ Subscription Plans using Clerk Billing
- ✅ Admin Dashboard

---

## 🧠 Tech Stack

### Frontend
- **Next.js 14 (App Router)**
- **React**
- **TypeScript**
- **Tailwind CSS**

### Backend
- **Next.js API Routes**
- **Server Components + Client Components**

### Database / CMS
- **Sanity (Headless CMS)**

### Authentication & Billing
- **Clerk Authentication**
- **Clerk Billing (Instead of Stripe)**

### AI Integration
- **OpenAI GPT-4o**
- AI SDK ToolLoopAgent
- Custom Course Search Tool

### Video Hosting
- **Mux**

---

## 🏗 Architecture Overview

Frontend (Next.js)  
⬇  
API Routes (`/api/chat`)  
⬇  
OpenAI GPT-4o  
⬇  
Sanity (Course Content Retrieval)

Authentication & Billing:
Clerk → Controls user roles (Free / Pro / Ultra)

Video Content:
Mux → Secure video streaming

---

## 🧩 How AI Works

1. User asks a question in lesson page.
2. Request goes to `/api/chat`.
3. Tutor Agent uses `searchCoursesTool`.
4. Tool searches Sanity for relevant lesson content.
5. GPT-4o generates answer based only on lesson previews.
6. Response is streamed back to frontend.

---

## 📝 AI Summary Feature

- AI generates summary from lesson video/content.
- Summary is stored temporarily.
- User can download summary as notes.
- Available based on subscription plan.

---

## 💳 Subscription Plans

Handled via **Clerk Billing**:
- Free Plan
- Pro Plan
- Ultra Plan

Feature gating is handled on the server side.

---

## 📌 Project Structure