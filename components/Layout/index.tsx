import { FC } from "react";
import { NextSeo } from "next-seo";

export interface ILayout {
	title: string;
}

const Layout: FC<ILayout> = ({ children, title }) => {
	return (
		<>
			<NextSeo title={title} />
			{/* Navbar */}
			{children}
			{/* Footer */}
		</>
	);
};

export default Layout;
