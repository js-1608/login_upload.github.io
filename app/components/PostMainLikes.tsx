import { useState } from "react";
import { PostMainLikesCompTypes, Like ,Comment} from "../types";
import { AiFillHeart } from "react-icons/ai";
import { BiLoaderCircle } from "react-icons/bi" // Import BiLoaderCircle
import {useRouter} from "next/navigation";
import {FaCommentDots, FaShare} from "react-icons/fa"
export default function PostMainLikes({ post }:PostMainLikesCompTypes) {
 
  const router=useRouter()
 
  const [hasClickedLike, setHasClickedLike] = useState<boolean>(false)
  const [userLiked, setUserLiked] = useState<boolean>(false)
  const [likes, setLikes] = useState<Like[]>([])
  const [comments, setComments]= useState<Comment[]>([])
  const[share,setshare]=useState(55 )

  const likeOrUnlike = () => {
    console.log("liked");
  };

  return (
    <>
      <div id={`PostMainLikes-${post?.id}`} className="relative mr-[75px]">
        <div className="absolute bottom-0 pl-2">
          <div className="pb-4 text-center">
            <button
              disabled={hasClickedLike}
              onClick={() => likeOrUnlike()}
              className="rounded-full bg-gray-200 p-2 cursor-pointer"
            >
              {!hasClickedLike ? (
                <AiFillHeart
                  color={likes?.length > 0 && userLiked ? "#ff2626" : ""}
                  size="25"
                />
              ) : (
                <BiLoaderCircle className="animate-spin" size="25" /> // Corrected typo
              )}
            </button>
            <span className="text-xs text-gray-800 font-semibold">
              {likes.length}
            </span>
          </div>
          <button
            onClick={()=>router.push(`/post/${post?.id}/${post?.profile?.user_id}`)}
                className="pb-4 text-center"
         >
          <div className="rounded-full bg-gray-200 p-2 cursor-pointer">
                <FaCommentDots size="25"/>
          </div>
          <span className="text-xs text-gray-800 font-semibold">
            {comments?.length}
          </span>

         </button>
         <button
                className="pb-4 text-center"
         >
          <div className="rounded-full bg-gray-200 p-2 cursor-pointer">
                <FaShare size="25"/>
          </div>
          <span className="text-xs text-gray-800 font-semibold"
          onClick={()=>setshare(share+1)}
          >
           {share}
          </span>

         </button>
        </div>
      </div>
    </>
  );
}
