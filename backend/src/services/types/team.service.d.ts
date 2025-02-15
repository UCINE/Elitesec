export interface TeamIdAndScore {
  teamId: string;
  score: number;
}

export type TeamWithScore = Team & { score: number };
