import { NextResponse } from "next/server";
import type { NextMiddleware } from "next/server";

const middleware: NextMiddleware = (request) => {
  const response = NextResponse.next();

  const { nextUrl } = request;
  const { pathname } = nextUrl;

  const id = pathname.replace("/app/todos", "");

  if (id === "/add") {
    return response;
  }

  if (id && !id.startsWith(`/${process.env.USER_ID}.`)) {
    const redirectUrl = new URL(nextUrl.origin);

    redirectUrl.pathname = "/app/todos";

    return NextResponse.redirect(redirectUrl);
  }

  return response;
};

export const config = {
  matcher: "/app/todos/:path*",
};

export default middleware;
