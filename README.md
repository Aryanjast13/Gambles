# 🎮 GamBles – Stake-Inspired Betting App(MERN Stack)

**GamBles** is a full-stack betting game platform inspired by Stake.com, built using the **MERN stack** (MongoDB, Express.js, React, Node.js). It features wallet-based betting with a Mines and Dice game, user authentication, wallet tracking, and transaction history — all wrapped in a modern, responsive UI.

> ⚠️ This is a learning project and **not crypto-based**. All funds and bets are simulated with virtual money.

---

)

## 🚀 Features

- 🔐 JWT-based authentication with secure refresh tokens
- 🧩 Mines game & 🎲 Dice game with profit logic
- 💰 Real-time wallet system and day-wise and bet-wise wallet graph
- 📊 User bet stats and winning streak tracking
- 📤 Deposit/withdraw transactions with Razorpay simulation
- 🛡️ Admin view and user activity logging
- 📱 Fully responsive design using Tailwind CSS

---

## 📦 Tech Stack

- **Frontend:** React, Tailwind CSS, Vite  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** JWT (access + refresh tokens)  
- **Payments (Simulated):** Razorpay  
- **Email + OAuth:** Resend, Gmail, GitHub  
- **Docs:** Postman Collection

---

## 📖 API Documentation

Explore the complete Postman API collection here:  
🔗 [GamBles Postman Docs](https://documenter.getpostman.com/view/38024301/2sB2x6kBmn)

### ✨ Highlighted Endpoints

#### 👤 User Routes (`/api/user`)
- `POST /register` – Register new user  
- `POST /login` – Log in with credentials  
- `POST /logout` – Logout session  
- `GET /my-details` – Get logged-in user details  
- `POST /refresh-token` – Refresh access token  
- `POST /resend-verification` – Resend email verification  
- `POST /reset-password` – Request OTP for reset  
- `POST /verify-reset-password-otp` – Verify OTP  
- `POST /set-new-password` – Reset password  
- `GET /get-day-wise-wallet-stats` – Wallet graph data  
- `POST /deposit-money` – Add virtual funds

#### 🕹️ Game Routes (`/api/games`)
- `POST /mines/start-mine` – Start new mines game  
- `PATCH /mines/reveal-tile` – Reveal a tile  
- `POST /mines/end-mine` – End and cash out  
- `POST /dice/roll-dice` – Roll dice and win/lose

#### 🎯 Bet Routes (`/api/bet`)
- `POST /create-bet` – Record a game bet  
- `GET /fetch-bets-by-user` – Get all user bets  
- `POST /fetch-user-bet-by-game` – Filter bets by game  
- `GET /get-user-totalwin-and-winningstreak` – Stats summary  

#### 💸 Transaction Routes (`/api/transaction`)
- `POST /create-transaction` – Deposit/Withdraw money  
- `GET /get-all-transaction-by-user-id` – Get full transaction history  
- `POST /update-transaction-status` – Admin: update payout status

#### 🧾 Razorpay Routes (`/api/razorpay`)
- `POST /create-deposit-order` – Start a simulated Razorpay order  
- `POST /verify-deposit-payment` – Verify simulated deposit  
- `POST /withdraw-payout-razorpay` – Simulated Razorpay payout

---

## 📁 Environment Variables

### 🔐 Backend – `server/.env`

```env
MONGODB_URI=your_mongo_uri
SECRET_KEY_ACCESS_TOKEN=your_access_secret
SECRET_KEY_REFRESH_TOKEN=your_refresh_secret
NODE_ENV=development

CLIENT_URL=http://localhost:5173
SERVER_URL=http://localhost:3000

RESEND_API_KEY=your_resend_api_key

SMTP_USER=your_smtp_user
SMTP_PASSWORD=your_smtp_password
SENDER_EMAIL=your_sender_email

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret

RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
RAZORPAYX_ACCOUNT_NUMBER=your_account_number
````

### 💻 Frontend – `client/.env`

```env
VITE_API_URL=http://localhost:3000
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

---

## 🛠️ Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/YashBhut1524/Gambles
cd Gambles

# 2. Set up frontend
cd client
npm install
cp .env.example .env
# Add your VITE_API_URL and Razorpay Key

# 3. Set up backend
cd ../server
npm install
cp .env.example .env
# Fill out all required keys in .env

# 4. Run development servers
npm run dev     # in /server
npm run dev     # in /client
```

---

## 🧑‍💻 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 🤝 Contributing

Feel free to fork the repo, open issues, or submit pull requests.
All suggestions, features, or improvements are welcome!

```
