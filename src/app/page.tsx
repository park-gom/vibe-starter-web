// Demo sales landing for "Vibe Starter Market".
// NOTE: This is a non-production demo — no real payment is wired up.
// CTAs are intentionally inert ("준비 중") until validation is done.

type Pkg = {
  tag: string;
  title: string;
  desc: string;
  price: string;
  badge: string;
  highlight?: boolean;
};

const packages: Pkg[] = [
  {
    tag: "A",
    title: "홈페이지 / 랜딩",
    desc: "AI 대화 레시피 + 최소 스타터. 무료로 풀어 입구를 만든다.",
    price: "무료",
    badge: "무료 미끼",
  },
  {
    tag: "B",
    title: "서버 + 웹 (Full-stack)",
    desc: "Next.js + Spring Boot / Prisma. 복잡해져도 안 무너지는 풀스택 기반.",
    price: "준비 중",
    badge: "상위 유료",
  },
  {
    tag: "C",
    title: "대규모 복잡 시스템",
    desc: "모듈러 모놀리스, RBAC·멀티테넌시·감사로그 내장. 진짜 매출처.",
    price: "준비 중",
    badge: "상위 유료",
    highlight: true,
  },
  {
    tag: "D",
    title: "모바일 앱",
    desc: "React Native / Flutter. 대행이 아니라 'AI로 직접 만드는 법'을 판다.",
    price: "준비 중",
    badge: "저가 유료",
  },
];

const pillars = [
  {
    title: "대화 레시피 (Recipe-First)",
    body: "본체는 코드가 아니다. AI에게 무엇을 · 어떤 순서로 · 어떻게 말해야 안 무너지는 결과가 나오는가 — 그 대화 설계를 판다.",
  },
  {
    title: "하네스 내장 (Harness-First)",
    body: "AI 에이전트가 안정적으로 일하도록 설정·제약·가이드를 레포에 내장. 동일 모델도 하네스만으로 성공률이 갈린다.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-100">
      {/* Nav */}
      <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-6">
        <span className="font-mono text-sm font-semibold tracking-tight">
          Vibe Starter Market
        </span>
        <span className="rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-700 dark:text-amber-400">
          데모 · 결제 미연동
        </span>
      </header>

      {/* Hero */}
      <section className="mx-auto w-full max-w-5xl px-6 pt-16 pb-20 sm:pt-24">
        <p className="mb-5 text-sm font-medium text-indigo-600 dark:text-indigo-400">
          AI 코딩 스타터 마켓플레이스
        </p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          AI로 시작은 누구나 한다.
          <br />
          우리는 <span className="text-indigo-600 dark:text-indigo-400">끝까지</span> 가는 법을 판다.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          한 화면은 누구나 만든다. 복잡해지면 통제 불능으로 무너진다. 그 갭 —
          복잡해져도 안 무너지게 AI를 운용하는 법 — 을 하네스와 대화 레시피로
          담은 유형별 스타터 패키지.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <button
            type="button"
            disabled
            className="flex h-12 cursor-not-allowed items-center justify-center rounded-full bg-zinc-900 px-7 text-sm font-medium text-white opacity-60 dark:bg-white dark:text-black"
          >
            구매하기 (준비 중)
          </button>
          <a
            href="#packages"
            className="flex h-12 items-center justify-center rounded-full border border-zinc-300 px-7 text-sm font-medium transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
          >
            패키지 둘러보기
          </a>
        </div>
      </section>

      {/* Pillars */}
      <section className="border-y border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto grid w-full max-w-5xl gap-8 px-6 py-16 sm:grid-cols-2">
          {pillars.map((p) => (
            <div key={p.title}>
              <h2 className="text-xl font-semibold">{p.title}</h2>
              <p className="mt-3 leading-7 text-zinc-600 dark:text-zinc-400">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="mx-auto w-full max-w-5xl px-6 py-20">
        <h2 className="text-2xl font-bold tracking-tight">패키지 라인업</h2>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          &quot;내가 뭘 만들지&quot;만 고르세요. 나머지 기본 설정은 끝나 있습니다.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg) => (
            <div
              key={pkg.tag}
              className={`flex flex-col rounded-2xl border p-6 ${
                pkg.highlight
                  ? "border-indigo-500 bg-indigo-50/50 dark:border-indigo-400 dark:bg-indigo-950/30"
                  : "border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-2xl font-bold text-zinc-300 dark:text-zinc-700">
                  {pkg.tag}
                </span>
                <span className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                  {pkg.badge}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{pkg.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {pkg.desc}
              </p>
              <p className="mt-6 text-lg font-bold">{pkg.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto w-full max-w-5xl px-6 py-16 text-center">
          <h2 className="text-2xl font-bold tracking-tight">
            출시되면 가장 먼저 알려드릴까요?
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">
            아직 검증 단계입니다. 결제는 연동되어 있지 않습니다.
          </p>
          <button
            type="button"
            disabled
            className="mt-8 flex h-12 cursor-not-allowed items-center justify-center rounded-full border border-zinc-300 px-7 text-sm font-medium opacity-60 dark:border-zinc-700 mx-auto"
          >
            사전 알림 신청 (준비 중)
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto w-full max-w-5xl px-6 py-10 text-sm text-zinc-500">
        <p>© Vibe Starter Market — 데모 사이트. 실제 판매·결제는 제공되지 않습니다.</p>
      </footer>
    </div>
  );
}
