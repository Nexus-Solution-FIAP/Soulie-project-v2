export interface LeaderboardUser {
  id: number;
  name: string;
  avatarLevel: string;
  streak: number;
  recycled: number;
  xp: number;
  isCurrentUser?: boolean;
}
