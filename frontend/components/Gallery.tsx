import Image from 'next/image';

export default function Gallery() {
  const imageNames = [
    '1.webp',
    '2.webp',
    '3.webp',
    '4.webp',
    '5.webp',
    '6.webp',
    '7.webp',
    '8.webp',
  ];

  return (
    <div className="py-8 8 mx-auto max-w-7xl">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {imageNames.map((imageName, index) => (
          <div key={index} className="h-auto max-w-full rounded-lg overflow-hidden">
            <Image
              src={`/images/thelitesecurity-images/${imageName}`} // Replace with your Cloudinary link
              alt={`Image ${index + 1}`}
              width={400}
              height={300}
            />
          </div>
          ))}
      </div>
    </div>
  
    );
}
