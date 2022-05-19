import RSS from "rss";
import { writeFileSync } from "fs";
import { getSortedPostsData } from "./posts";

export default async function generateRss() {
	const siteURL = "https://alex-kimeu.com";
	const allPosts = getSortedPostsData();

	const feed = new RSS({
		title: "Alex Kimeu",
		description: "Writing about tech & technologies I learn",
		site_url: siteURL,
		feed_url: `${siteURL}/feed.xml`,
		language: "en",
		pubDate: new Date(),
		copyright: `All rights reserved ${new Date().getFullYear()}, Alex`,
	});

	allPosts.map((post) => {
		feed.item({
			title: post.title,
			url: `${siteURL}/blog/${post.title.split(" ").join("-").toLowerCase()}`,
			date: post.date,
			description: post.excerpt,
		});
	});

	writeFileSync("../public", feed.xml({ indent: true }));
}
