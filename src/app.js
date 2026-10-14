export function add(a, b) {
  return a + b;
}

export function health() {
  return { status: 'ok', version: process.env.APP_VERSION ?? 'dev' };
}
