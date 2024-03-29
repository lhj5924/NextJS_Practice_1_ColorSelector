import Link from "next/link";

export default function App() {
  return (
    <>
      <h1>당신의 컬러를 골라보세요!</h1>

      <Link href="color">
        <button>컬러 고르러 가기</button>
      </Link>
    </>
  );
}
