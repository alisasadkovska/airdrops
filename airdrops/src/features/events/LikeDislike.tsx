import { useState } from 'react';
import { HandThumbUpIcon, HandThumbDownIcon } from '@heroicons/react/24/solid';


export default function LikeDislike() {


const [likes, setLikes] = useState(12);
const [dislikes, setDislikes] = useState(3);
const [status, setStatus] = useState<'like' | 'dislike' | null>(null);

const handleLike = () => {
    if (status === 'like') {
      setStatus(null);
      setLikes(likes - 1);
    } else {
      setStatus('like');
      setLikes(status === 'dislike' ? likes + 1 : likes + 1);
      if (status === 'dislike') setDislikes(dislikes - 1);
    }
  };

    const handleDislike = () => {
    if (status === 'dislike') {
      setStatus(null);
      setDislikes(dislikes - 1);
    } else {
      setStatus('dislike');
      setDislikes(status === 'like' ? dislikes + 1 : dislikes + 1);
      if (status === 'like') setLikes(likes - 1);
    }
  };

  return (
    <div className="flex items-center gap-4">
      {/* Like button */}
      <button
        onClick={handleLike}
        className={`flex items-center gap-2 px-3 py-2 rounded-xl transition
        ${status === 'like' ? 'bg-green-100 text-green-600' : 'hover:bg-gray-100 text-gray-700'}`}
      >
        <HandThumbUpIcon className="w-5 h-5" />
        <span className="font-medium">{likes}</span>
      </button>

      {/* Dislike button */}
      <button
        onClick={handleDislike}
        className={`flex items-center gap-2 px-3 py-2 rounded-xl transition
        ${status === 'dislike' ? 'bg-red-100 text-red-600' : 'hover:bg-gray-100 text-gray-700'}`}
      >
        <HandThumbDownIcon className="w-5 h-5" />
        <span className="font-medium">{dislikes}</span>
      </button>
    </div>
  );
}