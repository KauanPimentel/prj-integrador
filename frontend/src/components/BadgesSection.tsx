import { motion } from "framer-motion";
import { Star, CheckCircle2 } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const MOCK_BADGES = [
  {
    id: 1,
    name: "Super Tarefa Bros!",
    points_required: 50,
    unlocked: true,
    unlocked_at: "2024-01-10",
    image: "/badges/SELO_-_MARIO-removebg-preview.png",
  },
  {
    id: 2,
    name: "Velocidade de Entrega",
    points_required: 100,
    unlocked: true,
    unlocked_at: "2024-01-15",
    image: "/badges/SELO_-_SONIC-removebg-preview.png",
  },
  {
    id: 3,
    name: "O Homem de Aço Ganhou Pontos",
    points_required: 150,
    unlocked: true,
    unlocked_at: "2024-01-20",
    image: "/badges/SELO_-_SUPER_MAN-removebg-preview.png",
  },
  {
    id: 4,
    name: "A Câmara dos Segredos Produtivos",
    points_required: 300,
    unlocked: false,
    image: "/badges/SELO_-_HARRY_POTTER-removebg-preview.png",
  },
  {
    id: 5,
    name: "A Origem das Entregas",
    points_required: 500,
    unlocked: false,
    image: "/badges/SELO_-_LARA_CROFT-removebg-preview.png",
  },
  {
    id: 6,
    name: "Com Grandes Pontos Vêm Grandes Recompensas",
    points_required: 400,
    unlocked: false,
    image: "/badges/SELO_-_HOMEM_ARANHA-removebg-preview%20(1).png",
  },
  {
    id: 7,
    name: "A Recompensa Contra-Ataca",
    points_required: 750,
    unlocked: false,
    image: "/badges/SELO_-_STAR_WARS-removebg-preview.png",
  },
  {
    id: 8,
    name: "O Rei das Metas",
    points_required: 875,
    unlocked: false,
    image: "/badges/SELO_-_SIMBA-removebg-preview.png",
  },
  {
    id: 9,
    name: "A Lenda do Funcionário do Tempo",
    points_required: 1000,
    unlocked: false,
    image: "/badges/SELO_-_ZELDA-removebg-preview.png",
  },
];

export default function BadgesSection() {
  const unlockedBadges = MOCK_BADGES.filter(b => b.unlocked);
  const unlockedCount = unlockedBadges.length;
  const totalBadges = MOCK_BADGES.length;
  const progressPercent = (unlockedCount / totalBadges) * 100;
  const nextBadge = MOCK_BADGES.find(b => !b.unlocked);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-heading font-bold text-foreground">Selos de Conquista</h2>
        <div className="bg-secondary px-3 py-1 rounded-full text-sm font-medium text-foreground">
          {unlockedCount} de {totalBadges} desbloqueados
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="w-full bg-secondary rounded-full h-2">
          <motion.div
            className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 1 }}
          />
        </div>
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>{unlockedCount} selos desbloqueados</span>
          {nextBadge && (
            <span>Próximo: {nextBadge.name} — {nextBadge.points_required} pts</span>
          )}
        </div>
      </div>

      {/* Badges Grid */}
      <div className="overflow-x-auto pb-4">
        <div className="flex gap-4 min-w-max">
          {MOCK_BADGES.map((badge, index) => (
            <TooltipProvider key={badge.id}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex flex-col items-center gap-2 w-28">
                    <motion.div
                      className={`relative w-28 h-28 overflow-hidden bg-secondary rounded-lg flex items-center justify-center cursor-pointer transition-all ${
                        badge.unlocked ? 'border-2 border-yellow-400' : 'border-2 border-gray-500'
                      }`}
                      style={{
                        clipPath: 'polygon(0% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)',
                        filter: badge.unlocked ? 'none' : 'grayscale(100%)',
                      }}
                      initial={badge.unlocked ? { scale: 0.8, boxShadow: '0 0 0 rgba(255, 215, 0, 0)' } : {}}
                      animate={badge.unlocked ? { scale: 1, boxShadow: '0 0 10px rgba(255, 215, 0, 0.5)' } : {}}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <img
                        src={badge.image}
                        alt={badge.name}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      {badge.unlocked && (
                        <CheckCircle2 className="absolute top-1 right-1 w-4 h-4 text-green-500 bg-white rounded-full" />
                      )}
                    </motion.div>
                    <div className="w-full text-center">
                      <div className="text-xs font-semibold text-foreground leading-4 line-clamp-2">
                        {badge.name}
                      </div>
                      <div className="text-[11px] text-muted-foreground flex items-center justify-center gap-1 mt-1">
                        <Star className="w-3.5 h-3.5" />
                        {badge.points_required} pts
                      </div>
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{badge.name} — {badge.points_required} pts</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex gap-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-yellow-400 rounded"></div>
          <span>Selo desbloqueado</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-500 rounded"></div>
          <span>Bloqueado — passe o mouse para ver a prévia</span>
        </div>
      </div>
    </div>
  );
}