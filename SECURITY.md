# Security Guidelines

## Environment Variables
- Never commit `.env` files to version control
- Use `.env.example` for documentation
- Rotate API keys if they were ever exposed in git history

## Dependencies
- Regularly update dependencies for security patches
- Use `npm audit` to check for vulnerabilities
- Review third-party packages before installation

## Code Security
- Remove all debug console statements before production
- Validate all user inputs
- Use HTTPS in production
- Implement proper CORS policies

## Supabase Security
- Use Row Level Security (RLS) policies
- Limit API key permissions
- Monitor database access logs
- Regularly rotate API keys

## Deployment Security
- Use environment variables for all secrets
- Enable security headers
- Implement rate limiting
- Use HTTPS only in production

## Incident Response
If you suspect a security breach:
1. Immediately rotate all API keys
2. Review git history for exposed secrets
3. Check for unauthorized access
4. Update all passwords and tokens
5. Monitor for suspicious activity
