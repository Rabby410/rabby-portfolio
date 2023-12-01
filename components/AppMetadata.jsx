const author = "Shahadath Hossain";
const description =
	"Software developer from Moldova, Republic of, who loves to develop beautiful websites, single page applications, customer relationship management or code from scratch using React and Next.js";
const url = "https://rococo-lily-e1fa71.netlify.app/";
export const AppMetadata = {
	metadataBase: new URL("https://rococo-lily-e1fa71.netlify.app//"),
	title: {
		default: `Portfolio | ${author}`,
		template: `%s | ${author}`
	},
	description: description,
	icons: {
		icon: "/favicon.png"
	},
	keywords: [
		"Shahadath Hossain",
		"Shahadath Hossain - software developer",
		"Frontend developer",
		"Flutter developer",
		"Portfolio website",
		"Frontend Developer Portfolio"
	],
	creator: author,
	authors: [{ name: author, url: url }],
	colorScheme: "dark",
	openGraph: {
		title: `${author} | Portfolio`,
		description: description,
		url: url,
		siteName: `${author} | Portfolio`,
		images: [
			{
				url: "https://www.facebook.com/photo/?fbid=296769953258436&set=a.110714645197302",
				width: 800,
				height: 600,
				alt: "My personal portfolio website"
			},
			{
				url: "https://www.facebook.com/photo/?fbid=296769953258436&set=a.110714645197302",
				width: 1800,
				height: 1600,
				alt: "My personal portfolio website"
			}
		],
		locale: "en-US",
		type: "website"
	}
};
