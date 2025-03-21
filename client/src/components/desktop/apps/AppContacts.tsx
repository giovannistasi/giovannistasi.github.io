import { AppMarkdownLayout } from "@/components/desktop/apps/layout/AppMarkdownLayout";

const md = `
 **Email**

[giovanni@stasi.dev](mailto:giovanni@stasi.dev)

<br />

**Phone**

[+39 3348882291](tel:+393348882291)

<br />

**LinkedIn**

[https://www.linkedin.com/in/giovannistasi/](https://www.linkedin.com/in/giovannistasi/)

<br />

**GitHub**

[https://github.com/giovannistasi/](https://github.com/giovannistasi/)

<br />
`;

export function AppContacts() {
  return <AppMarkdownLayout markdown={md} title="Contacts" />;
}
