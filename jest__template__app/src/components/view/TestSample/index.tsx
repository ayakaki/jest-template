import Link from 'next/link';

const TestSample = () => {
  return (
    <main>
      <h1>Nextjs+Jestのサンプルサプリ</h1>
      <p>設定がすごく楽になりました。</p>
      <p>スナップショット後に付け足されたよ</p>
      <Link href='jump-dst-direct' data-testid="jump-dst-direct-flg">
        <a>▶︎ 遷移先ページ（直接） へ遷移する</a>
      </Link>
    </main>
  );
};

export default TestSample;
