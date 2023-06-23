"use client"

import Image from "next/image";
import { Modal } from "../Modal";

interface ImageModalProps {
  src?: string | null;
  isOpen?: boolean;
  onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({ onClose, src, isOpen }) => {
  if(!src) {
    return null;
  }

  return (
   <Modal isOpen={isOpen} onClose={onClose}>
    <div className="w-80 h-80">
      <Image 
      src={src}  
      alt="Image" 
      fill
      className="object-cover"
      />
    </div>
   </Modal>
  )
}