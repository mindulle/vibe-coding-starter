DROP TABLE IF EXISTS skills;
DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS profile;
DROP TABLE IF EXISTS highlights;

CREATE TABLE profile (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  team TEXT NOT NULL,
  position TEXT NOT NULL,
  uniform_number TEXT NOT NULL,
  tagline TEXT NOT NULL,
  introduction TEXT NOT NULL,
  image_path TEXT NOT NULL
);

CREATE TABLE highlights (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  label TEXT NOT NULL
);

INSERT INTO profile (
  name,
  team,
  position,
  uniform_number,
  tagline,
  introduction,
  image_path
) VALUES (
  '박혜성',
  '부산대학교 정보컴퓨터공학부',
  '팀원',
  '-',
  '자동화 프로젝트 팀원',
  '안녕하세요, 박혜성입니다. 부산대학교 정보컴퓨터공학부에서 공부하며 자동화와 효율화에 관심이 많습니다. 팀의 개발 생산성을 높이기 위한 스크립트와 도구를 만들고, 함께 더 나은 워크플로우를 설계하는 것을 즐깁니다. 편하게 연락 주세요!',
  '/images/developer-gemini.png'
);

INSERT INTO highlights (label) VALUES
  ('자동화에 능숙함'),
  ('협업 중심 사고'),
  ('문제해결 지향');
