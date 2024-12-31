import {
  InventarioIcon,
  PerfilIcon,
  ReportesIcon,
  VentasIcon,
} from "../components/Icons";

export const icons = {
  index: (props) => <VentasIcon name="Ventas" size={25} {...props} />,
  inventory: (props) => (
    <InventarioIcon name="Inventario" size={25} {...props} />
  ),
  reports: (props) => <ReportesIcon name="Reportes" size={25} {...props} />,
  profile: (props) => <PerfilIcon name="Perifl" size={25} {...props} />,
};
