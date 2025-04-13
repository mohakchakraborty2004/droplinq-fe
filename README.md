# 🔐DropLinq

A full-stack application for securely uploading, storing, and downloading files using AWS S3. Future updates will bring **WebRTC-based P2P transfer** and **decentralized IPFS sharing** for maximum speed and privacy.

---

## ✨ Features

- 📤 Upload files with metadata saved in PostgreSQL
- 📥 Download via secure signed URLs
- ☁️ File storage using AWS S3
- 📄 Real-time UI updates
- 🔜 Peer-to-peer (WebRTC) & decentralized (IPFS) coming soon

---

## 🧱 Tech Stack

| Layer     | Tech                        |
|-----------|-----------------------------|
| Backend   | Node.js, Express, AWS SDK, Prisma |
| Database  | PostgreSQL (via Prisma ORM) |
| Storage   | AWS S3                      |
| Frontend  | React + Axios               |
| Extras    | Multer, dotenv              |

---

## ⚙️ Setup Instructions

### 📁 Frontend Setup

```bash
git clone https://github.com/mohakchakraborty2004/droplinq-fe
npm install
npm run dev 
```
### 📁 Backend Setup

```bash
git clone https://github.com/mohakchakraborty2004/DropLinq
npm install
npm run dev 
```
# 🔜 Coming Soon


## 🛰 WebRTC P2P Transfer
1. Share files peer-to-peer with no intermediate server
2. Instant & serverless for local networks or remote friends

## 📦 IPFS + Pinata Integration
1. Decentralized file storage
2. Content-addressable and censorship-resistant
3. Public and persistent URLs powered by blockchain principles