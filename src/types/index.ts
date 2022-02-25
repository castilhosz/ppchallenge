export interface Collaborator {
  agent_id: number,
  name: string,
  image: URL,
  department: string,
  role: string,
  branch: string,
  status: "active" | "inactive"
}