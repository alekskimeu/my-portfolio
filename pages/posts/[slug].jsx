import Image from "next/image";
import React from "react";
import image from "../../public/images/user.jpeg";

import styles from "../../styles/Post.module.css";

const Post = () => {
	return (
		<div className={styles.postPage}>
			<div className="container">
				<div className={styles.postWrapper}>
					<Image src={image} alt="" className={styles.postImg} />
					<div>
						<div className={styles.postHeader}>
							<h1 className={styles.title}>Git Introduction</h1>
							<p className={styles.date}>12th Jan, 2022</p>
						</div>
						<p className={styles.ert}>5 min read</p>
					</div>

					<div className={styles.postBody}>
						<p className={styles.description}>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
							officia quae nulla eos neque facilis atque incidunt quia,
							reprehenderit, saepe minus at ex. Quam est molestias nobis earum
							ab consequuntur? Lorem ipsum dolor sit, amet consectetur
							adipisicing elit. Laudantium, nesciunt asperiores maiores, nisi
							nostrum voluptatem, soluta rem mollitia ea accusamus corporis
							natus. Beatae veniam, possimus iusto voluptatem expedita quos
							sunt. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Voluptatem, quia dolor tenetur doloribus officiis culpa voluptates
							amet quisquam aliquam, excepturi libero eius aliquid, perspiciatis
							error esse deleniti necessitatibus dignissimos doloremque. Lorem
							ipsum dolor sit amet consectetur adipisicing elit. In incidunt
							odit nihil pariatur veritatis non, optio accusamus dolorem
							excepturi vero voluptatem, natus, qui voluptatum rerum corrupti
							laudantium? Aliquid, iusto similique! Lorem ipsum dolor, sit amet
							consectetur adipisicing elit. Illum ullam illo veniam odio odit
							aliquam earum, voluptas fugit, necessitatibus quae ipsum provident
							unde commodi nulla assumenda sunt quas, ab modi.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Post;
