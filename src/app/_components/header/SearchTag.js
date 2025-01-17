export default function SearchTag({ content=["rc car","mobile "] }) {
    return (
      <div className="flex space-x-2 mt-1 text-sm text-gray-400">
        {content.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
    );
  }