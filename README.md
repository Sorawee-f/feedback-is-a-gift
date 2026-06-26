# Feedback is a Gift

Internal E-Card web app for an organization appreciation campaign.

## Run locally

```bash
npm install --no-audit --no-fund
npm run dev
```

## Deploy on Vercel

Recommended settings:

```text
Framework Preset: Vite
Install Command: npm install --no-audit --no-fund
Build Command: npm run build
Output Directory: dist
```

## Optional Google Sheets integration

This project is frontend-first. It works without a real database by saving submitted cards to browser localStorage.

For V1 tracking, you can connect Google Sheets in two ways:

### 1. Save submitted E-Card records to Google Sheets

Create a Google Apps Script Web App that accepts POST requests and appends the submitted card data to a Sheet.

Set this Vercel environment variable:

```text
VITE_GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/xxxx/exec
```

The app will POST this row schema:

```json
{
  "cardId": "string",
  "createdAt": "ISO datetime",
  "employeeCode": "6-digit employee code",
  "senderBU": "TVB | VG3 | TR | TRL | YOD | SS | EVP | TRC",
  "senderAka": "display name",
  "recipientEmployeeId": "employee id",
  "recipientName": "recipient nickname",
  "recipientEmail": "recipient email",
  "recipientDepartment": "recipient department",
  "message": "ecard message",
  "templateId": "template id",
  "yakStickerId": "custom yak sticker id",
  "yakPosition": "bottom-right | none",
  "emailStatus": "mock"
}
```

### 2. Load recipient database from Google Sheets

Publish a Google Sheet as CSV or expose it via Apps Script.

Set this Vercel environment variable:

```text
VITE_EMPLOYEE_SHEET_CSV_URL=https://docs.google.com/spreadsheets/d/.../export?format=csv&gid=0
```

Supported headers:

```text
employeeId, firstName, nickname, department, email
```

Thai headers are also supported:

```text
รหัสพนักงาน, ชื่อจริง, ชื่อเล่น, ฝ่าย, Email
```

If no URL is configured, the app uses mock employee data from `src/data.ts`.
