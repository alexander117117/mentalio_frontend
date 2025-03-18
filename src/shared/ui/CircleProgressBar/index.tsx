import './index.css'

interface CircleProgressBarProps {
  percent: number
}
export function CircleProgressBar({ percent }: CircleProgressBarProps) {
  const strokeDashoffset = ((100 - percent) * 282.7) / 100
  return (
    <div className="relative w-[250px] sm:w-[318px] h-[250px] sm:h-[318px]">
      <svg className={`w-full h-full`} viewBox="0 0 100 100">
        <defs>
          <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            {percent > 59 ? (
              <>
                <stop offset="0%" style={{ stopColor: '#24AC18' }} />
                <stop offset="100%" style={{ stopColor: '#0F460A' }} />
              </>
            ) : percent >= 25 ? (
              <>
                <stop offset="0%" style={{ stopColor: '#E59C26' }} />
                <stop offset="100%" style={{ stopColor: '#7F5615' }} />
              </>
            ) : (
              <>
                <stop offset="0%" style={{ stopColor: '#CD2F2F' }} />
                <stop offset="100%" style={{ stopColor: '#671818' }} />
              </>
            )}
          </linearGradient>
        </defs>
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke={percent > 59 ? '#E6F1CF' : percent >= 25 ? '#F9F8D4' : '#FFD4D4'}
          strokeWidth="8"
          className="opacity-100"
        />
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="url(#progressGradient)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray="282.7"
          strokeDashoffset="282.7"
          transform="rotate(-90 50 50)"
          className="animate-progress"
          style={{ '--target-offset': strokeDashoffset }}
        />
      </svg>
    </div>
  )
}
