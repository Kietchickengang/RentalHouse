import React from 'react';
import { Plug2, Droplets, Trash2, HouseHeart } from 'lucide-react';

const defaultCosts = [
  {
    id: '1',
    name: 'Tiền phòng',
    description: 'Chi phí thuê phòng hàng tháng tính riêng',
    price: [2000000, 3000000],
    icon: HouseHeart,
    color: 'text-red-600 bg-red-50',
    cntUnit: '/ tháng'
  },
  {
    id: '2',
    name: 'Tiền điện',
    description: 'Tính theo chỉ số công tơ thực tế sử dụng',
    price: [3500], // per kWh
    icon: Plug2,
    color: 'text-amber-600 bg-amber-50',
    cntUnit: '/ kWh'
  },
  {
    id: '3',
    name: 'Tiền nước',
    description: 'Tính theo số khối tiêu thụ dựa trên đồng hồ nước',
    price: [15000], // per m3
    icon: Droplets,
    color: 'text-sky-600 bg-sky-50',
    cntUnit: <> / m<sup className="text-md">3</sup></>
  },
  {
    id: '4',
    name: 'Tiền rác',
    description: 'Phí thu gom rác hàng tháng',
    price: [60000],
    icon: Trash2,
    color: 'text-emerald-600 bg-emerald-50',
    cntUnit: '/ tháng'
  },
];

export const CostTable = ({ items = defaultCosts }) => {
  const formatVND = (val) =>
    new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(val);

  return (
    <div className="w-full overflow-hidden rounded-2xl bg-white shadow-sm font-sans">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-indigo-500 border-b border-slate-100 dark:border-slate-800 text-xl font-semibold tracking-wide bg-gray-100">
              <th className="py-3.5 px-6">Tên dịch vụ</th>
              <th className="py-3.5 px-6">Mô tả</th>
              <th className="py-3.5 px-6 text-left">Chi phí</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-md">
            {items.map((item) => {
              const Icon = item.icon;
              const pr = item.price.map(e => formatVND(e))
            
              return (
                <tr 
                  key={item.id} 
                  className="hover:bg-slate-50/70 dark:hover:bg-slate-800/10 transition-colors"
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      {Icon && (
                        <div className={`p-2 rounded-full ${item.color} flex-shrink-0`}>
                          <Icon className="w-4 h-4" />
                        </div>
                      )}
                      <span className="font-semibold">
                        {item.name}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-md md:text-md">
                    {item.description}
                  </td>
                  <td className="py-4 px-6 text-md text-left">
                    {pr.length < 2? pr[0]:`${pr[0]} - ${pr[1]}`}
                    {item.cntUnit}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CostTable;