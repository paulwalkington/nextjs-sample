import { getShoppingCentres } from "../components/shoppingCentreService";
import Link from 'next/link'

export default function Home() {
  const shoppingCentres: String[] = getShoppingCentres();

  return (
    <div className="flex p-8">
      <table className="border-collapse border border-gray-300 shadow-lg rounded-lg overflow-hidden">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="border border-gray-300 px-6 py-3 text-left font-semibold">Shopping Centre</th>
            <th className="border border-gray-300 px-6 py-3 text-left font-semibold">Description</th>
          </tr>
        </thead>
        <tbody>
          {shoppingCentres.map((centre) => (
            <tr className="hover:bg-blue-50 transition-colors">
              <td className="border border-gray-300 px-6 py-4">
                <Link href={`/shopping-centres/${centre}`} className="text-blue-500 hover:text-blue-700">
                  {centre}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
