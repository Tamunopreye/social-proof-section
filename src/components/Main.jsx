import React from "react";
import star from "../assets/images/icon-star.svg";
import colton from "../assets/images/image-colton.jpg";
import anne from "../assets/images/image-anne.jpg";
import irene from "../assets/images/image-irene.jpg";

const Main = () => {
	return (
		<main className="container font-league py-8 px-2 mx-auto">
			<section className="mt-12 text-center md:text-left grid md:grid-cols-2 md:mt-20">
				<div>
					<h2 className="text-veryDarkMagenta font-bold text-5xl py-8 max-w-md md:text-6xl">
						10,000+ of our users love our products.
					</h2>
					<p className="text-darkGrayishMagenta text-xl max-w-md">
						We only provide great products combined with excellent
						customer service. See what our satisfied customers are
						saying about our services.
					</p>
				</div>
				{/* second div container */}
				<div className="py-8 space-y-4 flex flex-col items-center md:mt-10">
					<div className="bg-lightGrayishMagenta py-4 px-4 md:flex md:items-center w-80 md:w-[67%] rounded-md">
						{/* star container */}
						<div className="flex justify-center md:justify-start">
							<img src={star} className="px-1" alt="/" />
							<img src={star} className="px-1" alt="/" />
							<img src={star} className="px-1" alt="/" />
							<img src={star} className="px-1" alt="/" />
							<img src={star} className="px-1" alt="/" />
						</div>
						<h3 className="text-veryDarkMagenta text-lg font-bold md:pl-3">
							Rated 5 Stars in Reviews
						</h3>
					</div>

					<div className="bg-lightGrayishMagenta py-4 px-4 md:flex md:items-center w-80 md:w-[67%] rounded-md md:ml-16">
						{/* star container */}
						<div className="flex justify-center md:justify-start">
							<img src={star} className="px-1" alt="/" />
							<img src={star} className="px-1" alt="/" />
							<img src={star} className="px-1" alt="/" />
							<img src={star} className="px-1" alt="/" />
							<img src={star} className="px-1" alt="/" />
						</div>
						<h3 className="text-veryDarkMagenta text-lg font-bold md:pl-3 ">
							Rated 5 Stars in Report Guru
						</h3>
					</div>
					<div className="bg-lightGrayishMagenta py-4 px-4 md:flex md:items-center w-80 md:w-[67%] rounded-md md:ml-32">
						{/* star container */}
						<div className="flex justify-center md:justify-start">
							<img src={star} className="px-1" alt="/" />
							<img src={star} className="px-1" alt="/" />
							<img src={star} className="px-1" alt="/" />
							<img src={star} className="px-1" alt="/" />
							<img src={star} className="px-1" alt="/" />
						</div>
						<h3 className="text-veryDarkMagenta text-lg font-bold md:pl-3 ">
							Rated 5 Stars in BestTech
						</h3>
					</div>
				</div>
			</section>
			<section className="flex flex-col items-center gap-4 px-4 md:flex-row md:px-0 md:mt-12">
				<div className="bg-veryDarkMagenta text-white rounded-md py-6 px-4">
					<div className="flex gap-4">
						<img
							src={colton}
							className="rounded-full w-12"
							alt="/"
						/>
						<div>
							<h4 className="font-bold text-lg">Colton Smith</h4>
							<p className="text-darkGrayishMagenta text-lg font-bold">
								Verified Buyer
							</p>
						</div>
					</div>
					<p className="py-3 text-lg">
						"We needed the same printed design as the one we had
						ordered a week prior. Not only did they find the
						original order, but we also recieved it in time.
						Excellent! "
					</p>
				</div>
				<div className="bg-veryDarkMagenta text-white rounded-md py-6 px-4 md:mt-10">
					<div className="flex gap-4">
						<img
							src={irene}
							className="rounded-full w-12"
							alt="/"
						/>
						<div>
							<h4 className="font-bold text-lg">Irene Roberts</h4>
							<p className="text-darkGrayishMagenta text-lg font-bold">
								Verified Buyer
							</p>
						</div>
					</div>
					<p className="py-3 text-lg">
						"Customer service is always excellent and very quick
						turn around. Completely delighted with the simplicity of
						the purchase and the speed of delivery."
					</p>
				</div>
				<div className="bg-veryDarkMagenta text-white rounded-md py-6 px-4 md:mt-20">
					<div className="flex gap-4">
						<img src={anne} className="rounded-full w-12" alt="/" />
						<div>
							<h4 className="font-bold text-lg">Anne Wallace</h4>
							<p className="text-darkGrayishMagenta text-lg font-bold">
								Verified Buyer
							</p>
						</div>
					</div>
					<p className="py-3 text-lg">
						"Put an order with this company and can only praise them
						for the very high standard. Will definitely use them
						again and recommend them to everyone! "
					</p>
				</div>
			</section>
		</main>
	);
};

export default Main;
