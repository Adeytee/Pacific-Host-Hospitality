import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  CartesianGrid,
  ReferenceLine,
  Tooltip,
  Legend,
  Cell
} from "recharts";
import { 
  DollarSign, 
  Calendar, 
  AlertTriangle, 
  CheckCircle, 
  Star, 
  TrendingUp,
  Info
} from "lucide-react";

const revParData = [
  { month: "Jul", pacificCoast: 140, industryAvg: 180 },
  { month: "Aug", pacificCoast: 155, industryAvg: 185 },
  { month: "Sep", pacificCoast: 145, industryAvg: 190 },
  { month: "Oct", pacificCoast: 160, industryAvg: 195 },
  { month: "Nov", pacificCoast: 155, industryAvg: 200 },
  { month: "Dec", pacificCoast: 158, industryAvg: 195 },
];

const downtimeData = [
  { month: "Jul", hours: 8, color: "#22c55e" },
  { month: "Aug", hours: 12, color: "#ef4444" },
  { month: "Sep", hours: 18, color: "#ef4444" },
  { month: "Oct", hours: 6, color: "#22c55e" },
  { month: "Nov", hours: 10, color: "#3b82f6" },
  { month: "Dec", hours: 4, color: "#22c55e" },
];

const adoptionData = [
  { month: "Aug", preferences: 45, recommendations: 30 },
  { month: "Sep", preferences: 50, recommendations: 35 },
  { month: "Oct", preferences: 55, recommendations: 40 },
  { month: "Nov", preferences: 58, recommendations: 45 },
  { month: "Dec", preferences: 62, recommendations: 48 },
];

const laborData = [
  { month: "Jan", value: 5.3 },
  { month: "Feb", value: 5.1 },
  { month: "Mar", value: 4.9 },
  { month: "Apr", value: 4.6 },
  { month: "May", value: 4.4 },
  { month: "Jun", value: 4.2 },
  { month: "Jul", value: 4.0 },
  { month: "Aug", value: 3.9 },
  { month: "Sep", value: 3.7 },
  { month: "Oct", value: 3.6 },
  { month: "Nov", value: 3.5 },
  { month: "Dec", value: 3.5 },
];

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  
  return (
    <div className="flex gap-0.5" data-testid="star-rating">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < fullStars
              ? "fill-yellow-400 text-yellow-400"
              : i === fullStars && hasHalfStar
              ? "fill-yellow-400/50 text-yellow-400"
              : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

function CircularProgress({ value, size = 120 }: { value: number; size?: number }) {
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center" data-testid="circular-progress">
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-gray-200 dark:text-gray-700"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="text-green-500"
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="text-2xl font-bold" data-testid="text-circular-value">{value}%</span>
        <span className="text-xs text-green-600 font-medium">Success</span>
      </div>
    </div>
  );
}

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-6" data-testid="dashboard-container">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
        <div>
          <h1 className="text-xl md:text-2xl font-semibold" data-testid="text-title">Pacific Coast Hospitality Group</h1>
          <p className="text-sm text-muted-foreground">Last updated: December 17, 2024 at 2:30 PM</p>
        </div>
        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800">
          Midpoint Review
        </Badge>
      </div>

      {/* Summary Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-1">
              <DollarSign className="w-4 h-4 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">Project Budget (BAC)</p>
            </div>
            <p className="text-xl font-bold" data-testid="text-budget">$9.75M</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-1">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">Timeline</p>
            </div>
            <p className="text-xl font-bold" data-testid="text-timeline">Oct 2022 - Jun 2024</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground mb-2">Project Completion</p>
            <Progress value={50} className="h-2" />
            <p className="text-sm mt-1 text-right font-medium" data-testid="text-completion">50%</p>
          </CardContent>
        </Card>
      </div>

      {/* Risks & Strengths */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-4 h-4 text-amber-500" />
              <h3 className="font-semibold">Key Risk Areas</h3>
            </div>
            <div className="flex gap-2 flex-wrap">
              <Badge variant="secondary" className="bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                Technology infrastructure delays
              </Badge>
              <Badge variant="secondary" className="bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                Data migration challenges
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <h3 className="font-semibold">Key Strengths</h3>
            </div>
            <div className="flex gap-2 flex-wrap">
              <Badge variant="secondary" className="bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                Operational systems adoption
              </Badge>
              <Badge variant="secondary" className="bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                Change management effectiveness
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* KPI 1 & 2 Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        {/* KPI 1: Guest Satisfaction Score */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-sm">KPI 1: Guest Satisfaction Score</h3>
              <Info className="w-4 h-4 text-muted-foreground" />
            </div>
            
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-3xl font-bold" data-testid="text-satisfaction-score">3.9</span>
              <span className="text-lg text-muted-foreground">/ 5.0</span>
              <Badge variant="secondary" className="ml-2 bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                <TrendingUp className="w-3 h-3 mr-1" />
                Recovering
              </Badge>
            </div>
            
            <StarRating rating={3.9} />
            
            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Target</span>
              <span className="font-medium" data-testid="text-satisfaction-target">4.2</span>
            </div>
            
            <p className="text-xs text-muted-foreground mt-1">0.3 below target</p>
            
            <div className="mt-4">
              <p className="text-xs text-muted-foreground mb-2">Recent Trend</p>
              <div className="h-12 bg-muted/30 rounded flex items-end justify-around px-2 pb-1">
                {[60, 65, 58, 70, 75, 78].map((h, i) => (
                  <div 
                    key={i} 
                    className="w-2 bg-blue-500 rounded-t"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* KPI 2: RevPAR */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-sm">KPI 2: Revenue per Available Room (RevPAR)</h3>
              <Info className="w-4 h-4 text-muted-foreground" />
            </div>
            
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-3xl font-bold" data-testid="text-revpar">$158</span>
              <span className="text-sm text-muted-foreground">current</span>
              <Badge variant="destructive" className="ml-auto text-xs">
                -22% below avg
              </Badge>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm mb-4">
              <div>
                <p className="text-muted-foreground">Industry Average</p>
                <p className="font-semibold">$195</p>
              </div>
              <div>
                <p className="text-muted-foreground">Gap</p>
                <p className="font-semibold text-red-500">-$37</p>
              </div>
            </div>
            
            <div className="h-32">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revParData}>
                  <XAxis dataKey="month" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 10 }} axisLine={false} tickLine={false} domain={[100, 220]} />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="pacificCoast" 
                    stroke="#3b82f6" 
                    strokeWidth={2}
                    dot={{ fill: "#3b82f6", r: 3 }}
                    name="Pacific Coast"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="industryAvg" 
                    stroke="#ef4444" 
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={false}
                    name="Industry Avg"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            
            <div className="flex items-center justify-center gap-4 text-xs mt-2">
              <div className="flex items-center gap-1">
                <div className="w-3 h-0.5 bg-blue-500" />
                <span>Pacific Coast</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-0.5 bg-red-500 border-dashed" />
                <span>Industry Avg</span>
              </div>
            </div>
            
            <p className="text-xs text-muted-foreground mt-2 text-center">
              RevPAR remains ~22% below industry average at midpoint
            </p>
          </CardContent>
        </Card>
      </div>

      {/* KPI 3 & 4 Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        {/* KPI 3: System Downtime Hours */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-sm">KPI 3: System Downtime Hours</h3>
              <Info className="w-4 h-4 text-muted-foreground" />
            </div>
            
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-3xl font-bold" data-testid="text-downtime">4</span>
              <span className="text-sm text-muted-foreground">hrs this month</span>
            </div>
            
            <p className="text-xs text-muted-foreground mb-4">Acceptable threshold: 10 hours</p>
            
            <div className="h-40">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={downtimeData}>
                  <XAxis dataKey="month" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 10 }} axisLine={false} tickLine={false} domain={[0, 24]} />
                  <ReferenceLine y={10} stroke="#94a3b8" strokeDasharray="3 3" />
                  <Bar dataKey="hours" radius={[4, 4, 0, 0]}>
                    {downtimeData.map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <p className="text-xs text-muted-foreground mt-2">
              Major outage events impacting bookings and refunds
            </p>
          </CardContent>
        </Card>

        {/* KPI 4: Mobile App Stability & UX */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-sm">KPI 4: Mobile App Stability & UX</h3>
              <Info className="w-4 h-4 text-muted-foreground" />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-xs text-muted-foreground">App Crash Rate</p>
                    <Badge variant="secondary" className="text-xs bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Improving
                    </Badge>
                  </div>
                  <p className="text-2xl font-bold" data-testid="text-crash-rate">0.8%</p>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-xs text-muted-foreground">Active Users</p>
                    <Badge variant="secondary" className="text-xs bg-green-50 text-green-600 dark:bg-green-950 dark:text-green-400">
                      Increasing
                    </Badge>
                  </div>
                  <p className="text-2xl font-bold" data-testid="text-active-users">45,320</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-xs text-muted-foreground">App Store Rating</p>
                    <Badge variant="secondary" className="text-xs bg-green-50 text-green-600 dark:bg-green-950 dark:text-green-400">
                      Positive
                    </Badge>
                  </div>
                  <div className="flex items-center gap-1">
                    <p className="text-2xl font-bold" data-testid="text-app-rating">4.5</p>
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-xs text-muted-foreground">Feature Adoption</p>
                    <Badge variant="secondary" className="text-xs bg-green-50 text-green-600 dark:bg-green-950 dark:text-green-400">
                      High
                    </Badge>
                  </div>
                  <p className="text-2xl font-bold" data-testid="text-feature-adoption">78%</p>
                </div>
              </div>
            </div>
            
            <p className="text-xs text-muted-foreground mt-4">
              Confirms reliability and usability of guest-facing technology
            </p>
          </CardContent>
        </Card>
      </div>

      {/* KPI 5 & 6 Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        {/* KPI 5: Personalized Services Adoption */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-sm">KPI 5: Personalized Services Adoption</h3>
              <Info className="w-4 h-4 text-muted-foreground" />
            </div>
            
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-3xl font-bold" data-testid="text-adoption-rate">55%</span>
              <span className="text-sm text-muted-foreground">adoption</span>
              <Badge variant="secondary" className="ml-2 bg-green-50 text-green-600 dark:bg-green-950 dark:text-green-400">
                <TrendingUp className="w-3 h-3 mr-1" />
                Trending Up
              </Badge>
            </div>
            
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>Target</span>
              <span className="font-medium text-foreground">60%</span>
            </div>
            
            <p className="text-xs text-muted-foreground mb-2">5% to target</p>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <div className="flex items-center gap-1 mb-1">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="text-xs text-muted-foreground">Room Preferences</span>
                </div>
                <p className="text-xl font-bold" data-testid="text-room-preferences">62%</p>
              </div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  <div className="w-2 h-2 rounded-full bg-cyan-500" />
                  <span className="text-xs text-muted-foreground">Recommendations</span>
                </div>
                <p className="text-xl font-bold" data-testid="text-recommendations">48%</p>
              </div>
            </div>
            
            <div className="h-28">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={adoptionData} barGap={2}>
                  <XAxis dataKey="month" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 10 }} axisLine={false} tickLine={false} domain={[0, 80]} />
                  <Bar dataKey="preferences" fill="#3b82f6" radius={[2, 2, 0, 0]} name="Room Preferences" />
                  <Bar dataKey="recommendations" fill="#06b6d4" radius={[2, 2, 0, 0]} name="Recommendations" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <p className="text-xs text-muted-foreground mt-2">
              Adoption reflects effectiveness of integrated guest data systems
            </p>
          </CardContent>
        </Card>

        {/* KPI 6: Loyalty Program Integration */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-sm">KPI 6: Loyalty Program Integration</h3>
              <Info className="w-4 h-4 text-muted-foreground" />
            </div>
            
            <div className="flex flex-col items-center mb-4">
              <CircularProgress value={93} />
              <div className="flex items-center gap-2 mt-2 text-xs">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-muted-foreground">Target:</span>
                <span className="font-medium">95%</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold" data-testid="text-total-attempts">12,450</p>
                <p className="text-xs text-muted-foreground">Total Attempts</p>
              </div>
              <div>
                <p className="text-2xl font-bold" data-testid="text-successful">11,578</p>
                <p className="text-xs text-muted-foreground">Successful</p>
              </div>
            </div>
            
            <p className="text-xs text-muted-foreground mt-4 text-center">
              Measures consistency of guest experience across properties
            </p>
          </CardContent>
        </Card>
      </div>

      {/* KPI 7: Labor Utilization Efficiency */}
      <Card className="mb-4">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-sm">KPI 7: Labor Utilization Efficiency</h3>
            <Info className="w-4 h-4 text-muted-foreground" />
          </div>
          
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <div>
              <span className="text-3xl font-bold" data-testid="text-labor-hours">3.5</span>
              <span className="text-sm text-muted-foreground ml-1">hrs/room</span>
            </div>
            <Badge variant="secondary" className="bg-green-50 text-green-600 dark:bg-green-950 dark:text-green-400">
              27.1% improvement
            </Badge>
            <div className="flex gap-2 ml-auto">
              <Badge variant="outline" className="text-xs">Analytics rollout</Badge>
              <Badge variant="outline" className="text-xs">Cross-property integration</Badge>
            </div>
          </div>
          
          <div className="h-48 relative">
            <div className="absolute top-8 left-1/3 text-xs text-muted-foreground">Analytics rollout</div>
            <div className="absolute top-8 right-1/4 text-xs text-muted-foreground">Cross-property integration</div>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={laborData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="month" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
                <YAxis 
                  tick={{ fontSize: 10 }} 
                  axisLine={false} 
                  tickLine={false} 
                  domain={[3, 5.5]}
                  ticks={[3.0, 3.5, 4.0, 4.5, 5.0, 5.5]}
                />
                <Tooltip />
                <ReferenceLine x="Apr" stroke="#94a3b8" strokeDasharray="3 3" />
                <ReferenceLine x="Sep" stroke="#94a3b8" strokeDasharray="3 3" />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#3b82f6" 
                  strokeWidth={2}
                  dot={{ fill: "#3b82f6", r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
