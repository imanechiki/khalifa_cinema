"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef, useState } from "react";

const servicesItems = [
	{
		id: 1,
		title: "Conception de Cinéma sur Mesure",
		content: "Chaque salle est pensée pour s’adapter à vos envies, vos besoins et votre espace.",
		image: "/cinemaImages/service1.webp",
	},
	{
		id: 2,
		title: "Acoustique & Éclairage",
		content: "Optimisation sonore et mise en lumière pour une immersion totale, dans les moindres détails.",
		image: "/cinemaImages/service2.webp",
	},
	{
		id: 3,
		title: "Installation Audio & Vidéo",
		content: "Équipements haut de gamme soigneusement intégrés pour une performance visuelle et sonore exceptionnelle.",
		image: "/cinemaImages/service3.webp",
	},
];

export default function CinemaServicesSection() {
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref, { once: true, margin: "-100px" });

	const [hoveredImage, setHoveredImage] = useState<string | null>(null);
	const [anyCardHovered, setAnyCardHovered] = useState(false);

	// Animation variants
	const sectionVariants = {
		hidden: { opacity: 0, y: 40 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.7, when: "beforeChildren", staggerChildren: 0.15 },
		},
	};

	const cardsContainerVariants = {
		hidden: {},
		visible: { transition: { staggerChildren: 0.15 } },
	};

	return (
		<motion.section
			style={{
				backgroundImage: hoveredImage
					? `url(${hoveredImage})`
					: `url(/cinemaImages/Rectangle.svg)`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				transition: "background-image 0.4s ease",
				position: "relative",
			}}
			className="rounded-3xl transition-all duration-500 flex flex-col items-center justify-center gap-8 px-8 py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32"
			ref={ref}
			variants={sectionVariants}
			initial="hidden"
			animate={inView ? "visible" : "hidden"}
		>
			{hoveredImage && (
				<div
					className="absolute inset-0 bg-black/60 pointer-events-none z-0 rounded-3xl"
					aria-hidden="true"
				/>
			)}
			<motion.h2
				className={`text-3xl md:text-4xl uppercase text-center relative z-10 transition-colors duration-300 ${anyCardHovered ? "text-white" : ""
					}`}
				variants={{
					hidden: { opacity: 0, y: 20 },
					visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
				}}
			>
				NOTRE SERVICES
			</motion.h2>
			<motion.div
				className="flex flex-col md:flex-row justify-center items-stretch gap-8 relative z-10"
				variants={cardsContainerVariants}
			>
				{servicesItems.map((item, idx) => (
					<ServiceCard
						key={item.id}
						{...item}
						setHoveredImage={setHoveredImage}
						setAnyCardHovered={setAnyCardHovered}
					/>
				))}
			</motion.div>
		</motion.section>
	);
}

function ServiceCard({
	title,
	content,
	image,
	setHoveredImage,
	setAnyCardHovered,
}: {
	title: string;
	content: string;
	image: string;
	setHoveredImage: (img: string | null) => void;
	setAnyCardHovered: (hovered: boolean) => void;
}) {
	const [hovered, setHovered] = useState(false);

	// Card animation variants
	const cardVariants = {
		hidden: { opacity: 0, y: 40 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	};

	return (
		<motion.div
			className="relative flex flex-col gap-10 rounded-3xl transition-transform duration-300 hover:scale-105 flex-1 cursor-pointer h-[38rem]"
			onMouseEnter={() => {
				setHovered(true);
				setHoveredImage(image);
				setAnyCardHovered(true);
			}}
			onMouseLeave={() => {
				setHovered(false);
				setHoveredImage(null);
				setAnyCardHovered(false);
			}}
			variants={cardVariants}
		>
			<img
				src={image}
				alt={title}
				className="w-full h-[28rem] object-cover rounded-3xl"
			/>
			<div className="w-full text-center flex flex-col gap-6 flex-1">
				<h3 className={`text-3xl font-medium transition-colors duration-300 ${hovered ? "text-white" : ""
					}`}>
					{title}
				</h3>
				<div
					className={`transition-all duration-300 overflow-hidden ${hovered ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
						}`}
				>
					<p className={hovered ? "text-white transition-colors duration-300" : ""}>{content}</p>
				</div>
			</div>
		</motion.div>
	);
}

