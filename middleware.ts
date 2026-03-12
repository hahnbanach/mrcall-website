import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: [
    '/((?!api|_next|blog|logos|badges|robots\\.txt|llms\\.txt|favicon\\.ico|.*\\..*).*)',
  ],
};
