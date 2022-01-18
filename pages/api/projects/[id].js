import { faPoundSign } from '@fortawesome/free-solid-svg-icons';
import { projects } from '../../../data/projects';

export default function projectHandler({ query: { id } }, res) {
  const filtered = projects.filter((p) => p.id === id);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: `User with id: ${id} not found` });
  }
}
