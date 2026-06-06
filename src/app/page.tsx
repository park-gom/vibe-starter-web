// Demo sales landing for "Vibe Starter Market".
// NOTE: Non-production demo — no real payment is wired up.
// CTAs are intentionally inert ("준비 중"). No fake testimonials / metrics by design.

import type { ReactNode } from "react";

/* ------------------------------------------------------------------ */
/* Inline icons (no external dependency)                              */
/* ------------------------------------------------------------------ */

type IconProps = { className?: string };

function Icon({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const IconRecipe = (p: IconProps) => (
  <Icon className={p.className}>
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    <path d="M9 7h7M9 11h5" />
  </Icon>
);
const IconHarness = (p: IconProps) => (
  <Icon className={p.className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </Icon>
);
const IconBolt = (p: IconProps) => (
  <Icon className={p.className}>
    <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
  </Icon>
);
const IconCheck = (p: IconProps) => (
  <Icon className={p.className}>
    <path d="M20 6 9 17l-5-5" />
  </Icon>
);
const IconBreak = (p: IconProps) => (
  <Icon className={p.className}>
    <path d="M12 2v6M12 16v6" />
    <path d="m8 10 4 2 4-2" />
    <path d="M5 8c-2 2-2 6 0 8M19 8c2 2 2 6 0 8" />
  </Icon>
);
const IconLayers = (p: IconProps) => (
  <Icon className={p.className}>
    <path d="m12 2 9 5-9 5-9-5 9-5z" />
    <path d="m3 12 9 5 9-5M3 17l9 5 9-5" />
  </Icon>
);

/* ------------------------------------------------------------------ */
/* Data                                                               */
/* ------------------------------------------------------------------ */

const problems = [
  {
    title: "한 화면은 되는데 그 다음이 안 된다",
    body: "“만들어줘” 한 마디로 첫 화면은 나온다. 기능이 둘 셋 쌓이면 AI가 앞서 만든 걸 부수기 시작한다.",
  },
  {
    title: "고칠수록 더 망가진다",
    body: "에러를 고쳐달라 하면 멀쩡한 부분까지 갈아엎는다. 어디를 건드렸는지 추적이 안 된다.",
  },
  {
    title: "구조가 없으니 통제가 안 된다",
    body: "폴더·경계·규칙이 없는 채로 기능부터 늘리면, 복잡해지는 순간 손쓸 수 없게 무너진다.",
  },
];

const pillars = [
  {
    icon: IconRecipe,
    title: "대화 레시피 (Recipe-First)",
    body: "본체는 코드가 아니다. AI에게 무엇을 · 어떤 순서로 · 어떻게 말해야 안 무너지는 결과가 나오는가 — 그 대화 설계를 표준 포맷으로 담았다.",
  },
  {
    icon: IconHarness,
    title: "하네스 내장 (Harness-First)",
    body: "AI 에이전트가 안정적으로 일하도록 설정·제약·가이드를 레포에 내장. 동일 모델이라도 하네스 유무로 결과가 갈린다.",
  },
];

const steps = [
  {
    n: "01",
    title: "유형을 고른다",
    body: "“내가 뭘 만들지”만 선택. 홈페이지 · 풀스택 · 대규모 시스템 · 모바일 앱.",
  },
  {
    n: "02",
    title: "레시피대로 대화한다",
    body: "합의 → 뼈대 → 복구 → 확장. 각 단계의 프롬프트 시퀀스를 그대로 따라간다.",
  },
  {
    n: "03",
    title: "안 무너지게 키운다",
    body: "모듈 경계와 적합성 검사가 구조를 강제한다. 기능이 늘어도 통제력을 유지한다.",
  },
];

type Pkg = {
  tag: string;
  title: string;
  desc: string;
  price: string;
  badge: string;
  icon: (p: IconProps) => ReactNode;
  highlight?: boolean;
};

const packages: Pkg[] = [
  {
    tag: "A",
    title: "홈페이지 / 랜딩",
    desc: "AI 대화 레시피 + 최소 스타터. 무료로 풀어 입구를 만든다.",
    price: "무료",
    badge: "무료 미끼",
    icon: IconBolt,
  },
  {
    tag: "B",
    title: "서버 + 웹 (Full-stack)",
    desc: "Next.js + Spring Boot / Prisma. 복잡해져도 버티는 풀스택 기반.",
    price: "준비 중",
    badge: "상위 유료",
    icon: IconLayers,
  },
  {
    tag: "C",
    title: "대규모 복잡 시스템",
    desc: "모듈러 모놀리스, RBAC · 멀티테넌시 · 감사로그 내장. 진짜 매출처.",
    price: "준비 중",
    badge: "상위 유료",
    icon: IconHarness,
    highlight: true,
  },
  {
    tag: "D",
    title: "모바일 앱",
    desc: "React Native / Flutter. 대행이 아니라 ‘AI로 직접 만드는 법’을 판다.",
    price: "준비 중",
    badge: "저가 유료",
    icon: IconBolt,
  },
];

const inside = [
  "AGENTS.md — 도구 중립 에이전트 진입점",
  "RECIPE.md — 단계별 AI 대화 레시피",
  "아키텍처 · 컨벤션 · 설계 결정(ADR) 문서",
  "모듈 경계 적합성 검사 (.harness)",
  "디자인 토큰 레이어 (이미지/링크 → 화면 반영)",
  "동작하는 데모 모듈 (인증 + 예시 도메인)",
];

const faqs = [
  {
    q: "그냥 AI한테 시키면 되는 거 아닌가요?",
    a: "첫 화면까지는 그렇습니다. 우리가 파는 건 ‘복잡해진 다음에도 안 무너지게 운용하는 법’입니다. 모델이 잘하는 구간이 아니라, 모델이 흔히 무너지는 구간을 다룹니다.",
  },
  {
    q: "코드를 사는 건가요, 노하우를 사는 건가요?",
    a: "둘 다지만 본체는 노하우(대화 레시피)입니다. 코드(스타터·하네스)는 그 레시피가 안정적으로 작동하게 받쳐주는 최소 설정입니다.",
  },
  {
    q: "어떤 스택을 지원하나요?",
    a: "주력은 Java/Spring Boot · Next.js입니다. 유형마다 1순위 스택을 먼저 제공하고, 수요에 따라 다른 스택 버전을 점진 확장합니다.",
  },
  {
    q: "지금 구매할 수 있나요?",
    a: "아니요. 현재는 검증 단계의 데모 사이트이며 결제는 연동되어 있지 않습니다.",
  },
];

/* ------------------------------------------------------------------ */
/* Page                                                               */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      {/* Nav */}
      <header className="sticky top-0 z-20 border-b border-zinc-200/70 bg-white/80 backdrop-blur-md dark:border-zinc-800/70 dark:bg-zinc-950/80">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <span className="font-mono text-sm font-semibold tracking-tight">
            Vibe Starter Market
          </span>
          <nav className="hidden items-center gap-7 text-sm text-zinc-600 dark:text-zinc-400 sm:flex">
            <a href="#problem" className="transition-colors hover:text-zinc-900 dark:hover:text-white">문제</a>
            <a href="#how" className="transition-colors hover:text-zinc-900 dark:hover:text-white">작동 방식</a>
            <a href="#packages" className="transition-colors hover:text-zinc-900 dark:hover:text-white">패키지</a>
            <a href="#faq" className="transition-colors hover:text-zinc-900 dark:hover:text-white">FAQ</a>
          </nav>
          <span className="rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-700 dark:text-amber-400">
            데모 · 결제 미연동
          </span>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-zinc-200 dark:border-zinc-800">
        {/* gradient blobs */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl dark:bg-indigo-500/20" />
          <div className="absolute top-10 right-1/4 h-72 w-72 rounded-full bg-fuchsia-400/15 blur-3xl dark:bg-fuchsia-500/15" />
        </div>
        <div className="mx-auto w-full max-w-6xl px-6 pt-20 pb-24 sm:pt-28">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/60 px-3 py-1 text-xs font-medium text-indigo-600 dark:border-zinc-800 dark:bg-white/5 dark:text-indigo-400">
            <IconBolt className="h-3.5 w-3.5" />
            AI 코딩 스타터 마켓플레이스
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl">
            AI로 시작은 누구나 한다.
            <br />
            우리는{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-fuchsia-500 bg-clip-text text-transparent">
              끝까지
            </span>{" "}
            가는 법을 판다.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
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
          <p className="mt-6 text-sm text-zinc-500">
            현재 검증 단계입니다 · 실제 판매·결제는 제공되지 않습니다
          </p>
        </div>
      </section>

      {/* Problem */}
      <section id="problem" className="mx-auto w-full max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight">
            왜 AI 코딩은 복잡해지면 무너지는가
          </h2>
          <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            문제는 모델 성능이 아니라 <span className="font-semibold text-zinc-900 dark:text-zinc-100">운용 방식</span>입니다.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {problems.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6 dark:border-zinc-800 dark:bg-zinc-900/40"
            >
              <IconBreak className="h-7 w-7 text-rose-500" />
              <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pillars */}
      <section className="border-y border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/40">
        <div className="mx-auto w-full max-w-6xl px-6 py-24">
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight">
            우리가 파는 두 가지
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {pillars.map((p) => {
              const I = p.icon;
              return (
                <div
                  key={p.title}
                  className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-950"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600/10 text-indigo-600 dark:text-indigo-400">
                    <I className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{p.title}</h3>
                  <p className="mt-3 leading-7 text-zinc-600 dark:text-zinc-400">
                    {p.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="mx-auto w-full max-w-6xl px-6 py-24">
        <h2 className="text-3xl font-bold tracking-tight">작동 방식</h2>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          고르고, 레시피대로 대화하고, 구조가 무너지지 않게 키웁니다.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="relative rounded-2xl border border-zinc-200 p-7 dark:border-zinc-800">
              <span className="font-mono text-3xl font-bold text-zinc-200 dark:text-zinc-700">
                {s.n}
              </span>
              <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="border-y border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/40">
        <div className="mx-auto w-full max-w-6xl px-6 py-24">
          <h2 className="text-3xl font-bold tracking-tight">패키지 라인업</h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            “내가 뭘 만들지”만 고르세요. 나머지 기본 설정은 끝나 있습니다.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {packages.map((pkg) => {
              const I = pkg.icon;
              return (
                <div
                  key={pkg.tag}
                  className={`group flex flex-col rounded-2xl border p-6 transition-all hover:-translate-y-1 hover:shadow-lg ${
                    pkg.highlight
                      ? "border-indigo-500 bg-white shadow-md dark:border-indigo-400 dark:bg-zinc-950"
                      : "border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600/10 text-indigo-600 dark:text-indigo-400">
                      <I className="h-5 w-5" />
                    </div>
                    <span className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                      {pkg.badge}
                    </span>
                  </div>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="font-mono text-sm font-bold text-zinc-400 dark:text-zinc-600">
                      {pkg.tag}
                    </span>
                    <h3 className="text-lg font-semibold">{pkg.title}</h3>
                  </div>
                  <p className="mt-2 flex-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {pkg.desc}
                  </p>
                  <p className="mt-6 text-lg font-bold">{pkg.price}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What's inside */}
      <section className="mx-auto w-full max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              패키지 안에 들어있는 것
            </h2>
            <p className="mt-4 leading-8 text-zinc-600 dark:text-zinc-400">
              상품으로 인정하는 기준은 명확합니다 — 소스코드 + 하네스 레이어 +
              대화 레시피. 셋이 다 있어야 상품입니다.
            </p>
          </div>
          <ul className="space-y-3">
            {inside.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                  <IconCheck className="h-3.5 w-3.5" />
                </span>
                <span className="text-zinc-700 dark:text-zinc-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/40">
        <div className="mx-auto w-full max-w-3xl px-6 py-24">
          <h2 className="text-3xl font-bold tracking-tight">자주 묻는 질문</h2>
          <div className="mt-10 divide-y divide-zinc-200 dark:divide-zinc-800">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer items-center justify-between text-base font-medium [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="ml-4 flex-none text-zinc-400 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 leading-7 text-zinc-600 dark:text-zinc-400">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="relative overflow-hidden border-t border-zinc-200 dark:border-zinc-800">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 h-80 w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
        </div>
        <div className="mx-auto w-full max-w-3xl px-6 py-24 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            출시되면 가장 먼저 알려드릴까요?
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            아직 검증 단계입니다. 결제는 연동되어 있지 않습니다.
          </p>
          <button
            type="button"
            disabled
            className="mx-auto mt-8 flex h-12 cursor-not-allowed items-center justify-center rounded-full bg-zinc-900 px-7 text-sm font-medium text-white opacity-60 dark:bg-white dark:text-black"
          >
            사전 알림 신청 (준비 중)
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-10 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-mono font-semibold text-zinc-600 dark:text-zinc-400">
            Vibe Starter Market
          </span>
          <span>© 데모 사이트 — 실제 판매·결제는 제공되지 않습니다.</span>
        </div>
      </footer>
    </div>
  );
}
