import { useParams, Link } from 'react-router-dom';
import { TEAM_MEMBERS } from '../constants/integrantes';
import { Card } from '../components/Card';

export function IntegranteDetail() {
  const { id } = useParams<{ id: string }>();
  const member = TEAM_MEMBERS.find((m) => m.id === id);

  if (!member) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Integrante não encontrado</h2>
        <Link to="/integrantes" className="text-nature-brand hover:underline">
          Voltar para Integrantes
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/integrantes" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
        <span className="mr-2">←</span> Voltar para Integrantes
      </Link>
      
      <Card variant="brand" className="overflow-hidden">
        <div className="flex flex-col md:flex-row gap-8 items-center p-4">
          <div className="w-48 h-48 rounded-full bg-nature-bg border-4 border-nature-border flex items-center justify-center shadow-xl relative overflow-hidden flex-shrink-0">
            {member.photo ? (
              <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
            ) : (
              <span className="text-5xl font-bold text-gray-300">
                {member.avatarPlaceholder}
              </span>
            )}
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h1 className="font-display text-3xl md:text-4xl font-extrabold text-white mb-2">
              {member.name}
            </h1>
            <p className="text-xl font-medium text-nature-brand mb-4">
              {member.role}
            </p>
            <div className="inline-block bg-nature-bg px-4 py-2 rounded-md border border-nature-border text-sm text-gray-300 mb-8">
              {member.rm}
            </div>
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <a 
                href={member.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 py-3 px-6 bg-nature-bg rounded-lg border border-nature-border hover:border-nature-brand hover:text-white transition-colors text-gray-300 shadow-md hover:shadow-nature-brand/20"
              >
                <span className="font-medium">GitHub</span>
              </a>
              <a 
                href={member.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 py-3 px-6 bg-nature-bg rounded-lg border border-nature-border hover:border-[#0A66C2] hover:text-[#0A66C2] transition-colors text-gray-300 shadow-md hover:shadow-[#0A66C2]/20"
              >
                <span className="font-medium">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
