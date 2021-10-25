import Link from "next/link";
import {MainLayout} from "../components/MainLayout";

export default function Error() {
  return (
    <MainLayout>
      <h1>Error</h1>
      <p>Please <Link href="/">go back</Link></p>
    </MainLayout>
  )
}
