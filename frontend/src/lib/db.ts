import Database from "better-sqlite3";
import path from "node:path";

export type Profile = {
  id: number;
  name: string;
  team: string;
  position: string;
  uniform_number: string;
  tagline: string;
  introduction: string;
  image_path: string;
};

export type Highlight = {
  id: number;
  label: string;
};

const dbPath = path.join(process.cwd(), "local.db");

const defaultProfile: Profile = {
  id: 1,
  name: "오타니 쇼헤이",
  team: "자동화 프로젝트",
  position: "팀원",
  uniform_number: "-",
  tagline: "자동화 프로젝트 팀원",
  introduction:
    "안녕하세요, 박혜성입니다. 부산대학교 정보컴퓨터공학부에서 공부하며 자동화와 효율화에 관심이 많습니다. 팀의 개발 생산성을 높이기 위한 스크립트와 도구를 만들고, 함께 더 나은 워크플로우를 설계하는 것을 즐깁니다. 편하게 연락 주세요!",
  image_path: "/images/developer-gemini.png",
};

const defaultHighlights: Highlight[] = [
  { id: 1, label: "자동화에 능숙함" },
  { id: 2, label: "협업 중심 사고" },
  { id: 3, label: "문제해결 지향" },
];

function getDb() {
  const db = new Database(dbPath);

  db.exec(`
    CREATE TABLE IF NOT EXISTS profile (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      team TEXT NOT NULL,
      position TEXT NOT NULL,
      uniform_number TEXT NOT NULL,
      tagline TEXT NOT NULL,
      introduction TEXT NOT NULL,
      image_path TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS highlights (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      label TEXT NOT NULL
    );
  `);

  return db;
}

export function getProfile() {
  try {
    const profile = getDb()
      .prepare(
        "SELECT id, name, team, position, uniform_number, tagline, introduction, image_path FROM profile ORDER BY id LIMIT 1",
      )
      .get() as Profile | undefined;

    return profile ?? defaultProfile;
  } catch (error) {
    console.error(error);
    return defaultProfile;
  }
}

export function getHighlights() {
  try {
    const highlights = getDb().prepare("SELECT id, label FROM highlights ORDER BY id").all() as Highlight[];

    return highlights.length > 0 ? highlights : defaultHighlights;
  } catch (error) {
    console.error(error);
    return defaultHighlights;
  }
}
