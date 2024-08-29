import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

export default function HomePage() {
  const t = useTranslations("HomePage");

  const route = useRouter();
  const handleClick = () => {};
  return <h1>{t("title")}</h1>;
}
