export default {
  async fetch(request, env) {
    // ASSETS 바인딩을 통해 정적 파일을 서비스합니다.
    return env.ASSETS.fetch(request);
  },
};
