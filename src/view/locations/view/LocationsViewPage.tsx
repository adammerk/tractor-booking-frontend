import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/locations/view/locationsViewActions';
import selectors from 'src/modules/locations/view/locationsViewSelectors';
import LocationsView from 'src/view/locations/view/LocationsView';
import LocationsViewToolbar from 'src/view/locations/view/LocationsViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function LocationsPage() {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(actions.doFind(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.locations.menu'), '/locations'],
          [i18n('entities.locations.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.locations.view.title')}
        </PageTitle>

        <LocationsViewToolbar match={match} />

        <LocationsView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default LocationsPage;
