---
name: security-audit
description: "Comprehensive security audit for web applications. Checks auth, secrets, dependencies, OWASP Top 10, and provides prioritized remediation. Use before deploying or when reviewing code for vulnerabilities."
license: MIT
compatibility: opencode
metadata:
  audience: developers
  workflow: security
---

# Security Audit

Pre-deployment security audit that identifies vulnerabilities, checks dependencies, and provides actionable remediation. Works on any web application stack.

## When to Use

- Before deploying to production or staging
- Before merging to main/master
- For pre-release security reviews
- When explicitly requested: "run security audit"
- When reviewing third-party dependencies

## When NOT to Use

- Local development testing
- Sandbox/ephemeral environments
- Feature branch iterations (use changed-only mode instead)

## Severity Definitions

| Level | Meaning | Action |
|-------|---------|--------|
| **CRITICAL** | Exploitable vulnerability, data loss risk | Fix now. Blocks release. |
| **HIGH** | Security weakness, significant bug | Fix before deploy. |
| **MEDIUM** | Hardening opportunity, minor issue | Fix when possible. |
| **LOW** | Best practice, style, naming | Fix if convenient. |

## Audit Workflow

### 1. Detect Context
Identify the project type:
- Web app (frontend + backend)
- API only
- CLI tool
- Library

### 2. Scan (Parallel)
Run these checks simultaneously:

| Check | Command | Purpose |
|-------|---------|---------|
| **Secrets** | `gitleaks detect --source=.` | Hardcoded secrets |
| **Dependencies** | `npm audit --audit-level=moderate` | Known vulnerabilities |
| **SAST** | Manual review of auth, input, crypto | Code-level issues |

### 3. Manual Review Checklist

#### Auth & Authorization
- [ ] Authentication required where needed
- [ ] Authorization checked at every boundary
- [ ] No assuming "frontend already validated"
- [ ] Session tokens properly managed
- [ ] Password hashing (bcrypt/argon2, not MD5/SHA1)

#### Secrets & Config
- [ ] No secrets in code (env vars only)
- [ ] `.env.local` not committed
- [ ] CORS configured properly (not `*` for auth endpoints)
- [ ] HTTPS enforced
- [ ] Security headers set (CSP, HSTS, X-Frame-Options)

#### Input & Data
- [ ] User input validated server-side
- [ ] SQL injection protected (parameterized queries)
- [ ] XSS protected (output encoding)
- [ ] File upload validation (type, size)
- [ ] No sensitive data in URLs

#### Dependencies
- [ ] No known vulnerable packages
- [ ] No abandoned packages
- [ ] Lock file committed (`package-lock.json`)

#### Errors & Logging
- [ ] No stack traces in client responses
- [ ] No internal paths or DB details exposed
- [ ] Error messages don't leak attack info

### 4. Classify Findings
For each finding:
- **File + Line**: Exact location
- **Severity**: CRITICAL / HIGH / MEDIUM / LOW
- **Impact**: What could happen
- **Fix**: Concrete code change or command

### 5. Generate Report

```markdown
# Security Audit Report — [Date]

## Summary
- CRITICAL: X
- HIGH: X
- MEDIUM: X
- LOW: X

## Findings

### [CRITICAL] Finding Title
- **File**: `path/to/file.ts:42`
- **Impact**: Description of what could go wrong
- **Fix**: 
  ```diff
  - vulnerable code
  + fixed code
  ```

## Remediation Plan
1. Fix CRITICAL immediately
2. Fix HIGH before deploy
3. Fix MEDIUM in next sprint
4. Fix LOW when convenient
```

## Quick Reference: OWASP Top 10

| # | Vulnerability | What to Check |
|---|---------------|---------------|
| A01 | Broken Access Control | Auth on every route, no IDOR |
| A02 | Cryptographic Failures | No MD5/SHA1, proper TLS |
| A03 | Injection | Parameterized queries, input validation |
| A04 | Insecure Design | Threat modeling, secure patterns |
| A05 | Security Misconfiguration | Headers, CORS, defaults |
| A06 | Vulnerable Components | npm audit, lock file |
| A07 | Auth Failures | Rate limiting, MFA, session mgmt |
| A08 | Data Integrity | CI/CD security, signed commits |
| A09 | Logging Failures | Audit trails, error logging |
| A10 | SSRF | URL validation, allowlists |

## Constraints

- **MUST** report critical findings immediately
- **MUST** provide specific file/line locations
- **MUST** include remediation for each finding
- **MUST** rate severity consistently
- **MUST** check for secrets in code
- **MUST** verify scope before active testing
