# Decision-Centric AI for MSME Operations

A decision-centric, agentic AI system that helps MSMEs manage daily operations by continuously observing business conditions and autonomously deciding what should happen next.
This project demonstrates how LangGraph + FastAPI + Groq can be used to move beyond dashboards and automations into active operational ownership.

## Problem Statement 

MSMEs face constant changes in:
-Customer requests
-Inventory availability
-Staff workload

Today, these decisions are handled manually using WhatsApp, spreadsheets, phone calls, and verbal instructions. Each tool shows only a partial view of operations and does not update decisions when conditions change.

This leads to:
-Missed customer commitments
-Delayed execution
-Unclear responsibility

The core problem is the lack of a system that can continuously observe operations, make decisions, and drive work forward.

## Solution Overview

This project implements a Decision-Centric AI Agent that:
-Continuously tracks operational state
-Decides what action should be taken next
-Assigns and monitors tasks automatically
-Re-evaluates decisions when conditions change

## Work Flow
External Events--> FastAPI APIs--> Live Operational State--> LangGraph Decision Agent(Observe → Decide → Validate)--> Action Execution--> Explanation & Insights-->(Continuous Loop on State Change)


## Tech Stack

| Layer            | Technology                       |
| ---------------- | -------------------------------- |
| Language         | Python                           |
| API Framework    | FastAPI                          |
| Agent Framework  | LangGraph                        |
| State Management | In-memory (extendable to SQLite) |
| Decision Logic   | Custom Python rules              |
| LLM              | Groq                             |
| Frontend         | React + Tailwind CSS             |

---

## Tool Integration 

-Python – Core backend and agent logic
-FastAPI – REST APIs for decision execution
-LangGraph – Decision-centric agent orchestration
-State Management – In-memory / SQLite
-Decision Logic – Custom Python business rules
-Groq LLM – Fast reasoning for dynamic decisions

---

## Project Structure

```
TeamError_MSME/
├── agent.py              # langGraph decision agent
├── decision_logic.py     # core decision rules
├── main.py               # fastAPI entry point
├── models.py             # API request/response models
├── requirements.txt      # backend dependencies
├── tool_integration.txt
├── README.md
└── frontend/
    ├── public/           # react public assets
    ├── src/              # UI components & logic
    ├── package.json
    ├── tailwind.config.js
    └── postcss.config.js
```

---

## How the Agent Works

### Operational State

The agent maintains a live operational state including:
-Customer orders
-Inventory levels
-Staff availability
-Active tasks

### Decision Logic

The agent:
1.Checks whether a customer promise can be safely made
2.Detects the current operational bottleneck
3.Assigns or reassigns tasks automatically
4.Re-runs decisions when constraints change

---
## Daily Insight Summary

The system generates a **daily operational insight summary** to give MSME owners clear visibility into what happened and why.

The summary includes:
- Key decisions made by the agent during the day  
- Orders accepted, delayed, or escalated  
- Current bottlenecks impacting operations  
- Tasks completed, pending, or blocked  

This feature improves transparency and trust in autonomous decisions while keeping humans informed without manual tracking.

## Getting Started

### Backend Setup

```bash
pip install -r requirements.txt
uvicorn main:app --reload
```
Backend runs at:

```
http://localhost:8000
```

---
### Frontend Setup

```bash
cd frontend
npm install
npm start
```
Frontend runs at:

```
http://localhost:3000
```

---
Below is the **correct way to add your example** in the README.
Clear, realistic, and consistent with your agent + daily insight feature.

### 📍 Place this under: **Example API Interaction** (replace the old example)

---

## Example API Interaction

### Input (Customer Order)

```json
{
  "customer_name": "Chaitanya",
  "customer_email": "chaitanya@gmail.com",
  "customer_phone": "9876543210",
  "item_name": "Brick",
  "quantity": 50
}
```

---

### Agent Decision Output

```json
{
  "decision": "REJECT",
  "reason": "Item not found in inventory",
  "customer_name": "Chaitanya",
  "customer_email": "chaitanya@gmail.com",
  "assigned_staff": null,
  "explanation": "We are rejecting the order for 50 bricks due to insufficient assigned staff to handle the delivery and installation process."
}
```

---

### Bottleneck Detection Output

```json
{
  "bottlenecks": [
    "Inventory shortage: steel"
  ]
}
```

---

### Daily Business Insight Summary

```json
{
  "text": "**Business Insight:** \n\"Optimize steel inventory management by implementing a just-in-time (JIT) ordering system to reduce stockouts and minimize excess inventory, ensuring timely delivery and cost savings.\"",
  "timestamp": "2026-02-01 06:54:50"
}
```

---

## Why this example matters (short, judge-friendly)
- Shows end-to-end decision flow.
- Demonstrates order rejection with reasoning
- Highlights bottleneck detection
- Includes human-readable business insight
- Proves the system is decision-centric.

---

## What This Project Demonstrates
-Decision-centric AI design
-Autonomous task ownership
-Real-time operational re-evaluation
-Clear separation of observation, decision, and action

---

## Future Enhancements
- Priority-based task scheduling
- Multi-agent coordination

---

