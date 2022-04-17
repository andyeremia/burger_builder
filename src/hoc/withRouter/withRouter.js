import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    let searchParams = useSearchParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params, searchParams }}
      />
    );
  }

  return ComponentWithRouterProp;
}

export default withRouter;
