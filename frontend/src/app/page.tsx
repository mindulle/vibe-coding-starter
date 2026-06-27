import { getHighlights, getProfile } from "@/lib/db";

export default function Home() {
  const profile = getProfile();
  const highlights = getHighlights();

  return (
    <main className="min-h-screen bg-[var(--color-ivory-canvas)] px-6 py-12 text-[var(--color-ink-black)] md:px-10 md:py-16">
      {/* 자기소개 전체 화면: 학생들이 이름, 소속, 설명을 바꿔보는 첫 실습 영역 */}
      <section className="mx-auto max-w-5xl rounded-[24px] border border-[var(--color-linen-border)] bg-[var(--color-pure-white)] p-8 md:p-10">
        <div className="grid gap-8 md:grid-cols-[320px_1fr] md:items-center">
          {/* 프로필 사진 영역: public/images/ohtani.jpeg 파일을 화면에 보여줌 */}
          <img
            src={profile.image_path}
            alt={`${profile.name} 프로필 사진`}
            className="h-80 w-full rounded-[16px] border border-[var(--color-linen-border)] object-cover"
          />

          <div>
            <p className="text-sm font-medium text-[var(--color-stone-gray)]">프로필</p>
            <h1 className="font-editorial mt-3 text-5xl font-[400] leading-[1.2] text-[var(--color-ink-black)] sm:text-6xl">{profile.name}</h1>
            <p className="mt-5 max-w-xl text-[17px] leading-8 text-[var(--color-charcoal)]">{profile.tagline}</p>
          </div>
        </div>

        {/* 기본 정보 카드: 바이브 코딩으로 가장 바꾸기 쉬운 데이터 영역 */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-[16px] border border-[var(--color-linen-border)] bg-[var(--color-warm-parchment)] p-6">
            <p className="text-sm font-medium text-[var(--color-stone-gray)]">이름</p>
            <p className="font-editorial mt-2 text-[28px] leading-[1.2] text-[var(--color-ink-black)]">{profile.name}</p>
          </div>
          <div className="rounded-[16px] border border-[var(--color-linen-border)] bg-[var(--color-warm-parchment)] p-6">
            <p className="text-sm font-medium text-[var(--color-stone-gray)]">소속</p>
            <p className="font-editorial mt-2 text-[28px] leading-[1.2] text-[var(--color-ink-black)]">{profile.team}</p>
          </div>
          <div className="rounded-[16px] border border-[var(--color-linen-border)] bg-[var(--color-warm-parchment)] p-6">
            <p className="text-sm font-medium text-[var(--color-stone-gray)]">포지션</p>
            <p className="font-editorial mt-2 text-[28px] leading-[1.2] text-[var(--color-ink-black)]">{profile.position}</p>
          </div>
          <div className="rounded-[16px] border border-[var(--color-linen-border)] bg-[var(--color-warm-parchment)] p-6">
            <p className="text-sm font-medium text-[var(--color-stone-gray)]">등번호</p>
            <p className="font-editorial mt-2 text-[28px] leading-[1.2] text-[var(--color-ink-black)]">{profile.uniform_number}</p>
          </div>
        </div>

        {/* 소개 문장 영역: 학생들이 문구와 스타일을 바꾸는 연습용 섹션 */}
        <div className="mt-10 rounded-[16px] border border-[var(--color-linen-border)] bg-[var(--color-pure-white)] p-8">
          <h2 className="font-editorial text-[32px] font-[400] leading-[1.2] text-[var(--color-ink-black)]">자기소개</h2>
          <p className="mt-4 text-[16px] leading-8 text-[var(--color-charcoal)]">{profile.introduction}</p>
        </div>

        {/* 좋아하는 것 목록: 항목 추가/삭제 실습에 쓰기 좋은 영역 */}
        <div className="mt-10">
          <h2 className="font-editorial text-[32px] font-[400] leading-[1.2] text-[var(--color-ink-black)]">특징</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {highlights.map((highlight, index) => (
              <div
                key={highlight.id}
                className={`rounded-[9.6px] border border-[var(--color-linen-border)] px-4 py-3 text-center text-[15px] font-medium text-[var(--color-warm-slate)] ${
                  index % 2 === 0 ? "bg-[var(--color-warm-parchment)]" : "bg-[var(--color-pure-white)]"
                }`}
              >
                {highlight.label}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
