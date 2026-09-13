import { Card } from '../components/Card';
import { TEAM_MEMBERS } from '../constants/integrantes';
import { Link } from 'react-router-dom';

export function Integrantes() {

  const team = TEAM_MEMBERS;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      <header className="text-center mb-16">
        <h1 className="font-display text-4xl font-extrabold text-white tracking-tight mb-4">
          Os Guardiões do Soulie
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Conheça a equipe de estudantes de Engenharia de Produto Digital da FIAP
          por trás do desenvolvimento desta plataforma.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {team.map((member, index) => (
          <div key={index}>
            <Card variant="brand" className="group h-full">
              <div className="flex flex-col items-center text-center h-full">

                <div className="w-24 h-24 rounded-full bg-nature-bg border-2 border-nature-border flex items-center justify-center mb-6 shadow-lg relative overflow-hidden group-hover:border-nature-brand transition-colors duration-300">
                  {member.photo ? (
                    <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-2xl font-bold text-gray-300 group-hover:text-nature-brand transition-colors duration-300">
                      {member.avatarPlaceholder}
                    </span>
                  )}
                </div>

                <h3 className="font-display text-xl font-bold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-nature-brand mb-2">
                  {member.role}
                </p>
                <div className="inline-block bg-nature-bg px-3 py-1 rounded-md border border-nature-border text-xs text-gray-400 mb-6">
                  {member.rm}
                </div>

                <div className="flex items-center gap-3 mt-auto pt-6 border-t border-nature-border/50 w-full justify-center">
                  <a href={member.github} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-nature-bg rounded-lg border border-nature-border hover:border-nature-brand hover:text-white transition-colors text-gray-400">

                    <span className="text-sm font-medium">GitHub</span>
                  </a>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-nature-bg rounded-lg border border-nature-border hover:border-[#0A66C2] hover:text-[#0A66C2] transition-colors text-gray-400">

                    <span className="text-sm font-medium">LinkedIn</span>
                  </a>
                </div>

                <div className="mt-4 w-full">
                  <Link to={`/integrante/${member.id}`} className="w-full flex items-center justify-center gap-2 py-2 px-3 bg-nature-brand/10 text-nature-brand rounded-lg border border-nature-brand/20 hover:bg-nature-brand hover:text-white transition-colors">
                    <span className="text-sm font-medium">Ver Perfil Completo</span>
                  </Link>
                </div>

              </div>
            </Card>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center bg-nature-surface p-8 rounded-xl border border-nature-border">
        <h3 className="font-display text-lg font-bold text-white mb-2">Turmas 1TDSPY & 1TDSPV (2026)</h3>
        <p className="text-gray-400">
          Este projeto é parte da avaliação da disciplina Front-End Design Engineering.
          Código fonte disponível sob licença MIT no repositório oficial.
        </p>
      </div>

    </div>
  );
}
