import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

// material-ui
import { Box, List, Typography } from '@mui/material';

// project import
import NavItem from './NavItem';

import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { forwardRef, useEffect } from 'react';
import { activeItem } from 'store/reducers/menu';

// ==============================|| NAVIGATION - LIST GROUP ||============================== //

const NavGroup = ({ item }) => {
  const menu = useSelector((state) => state.menu);
  const { drawerOpen } = menu;
  const { t } = useTranslation();

  const { pathname } = useLocation();
  const dispatch = useDispatch();
  let itemTarget = '_self';
  if (item.target) {
    itemTarget = '_blank';
  }
  let listItemProps = {
    component: forwardRef((props, ref) => (
      <Link style={{ textDecoration: 'none' }} ref={ref} {...props} to={item.url} target={itemTarget} />
    ))
  };
  const itemHandler = (id) => {
    dispatch(activeItem({ openItem: [id] }));
  };
  useEffect(() => {
    if (pathname.includes(item.url)) {
      dispatch(activeItem({ openItem: [item.id] }));
    }
    // eslint-disable-next-line
  }, [pathname]);

  const navCollapse = item.children?.map((menuItem) => {
    switch (menuItem.type) {
      case 'collapse':
        return (
          <Typography key={menuItem.id} variant="caption" color="error" sx={{ p: 2.5 }}>
            collapse - only available in paid version
          </Typography>
        );
      case 'item':
        return <NavItem key={menuItem.id} item={menuItem} level={1} />;
      default:
        return (
          <Typography key={menuItem.id} variant="h6" color="error" align="center">
            Fix - Group Collapse or Items
          </Typography>
        );
    }
  });

  return (
    <List
      subheader={
        item.title &&
        drawerOpen && (
          <Box sx={{ pl: 3, mb: 1.5 }}>
            <Typography {...listItemProps} onClick={() => itemHandler(item.id)} variant="subtitle2" color="textSecondary">
              {t(item.title)}
            </Typography>
            {/* only available in paid version */}
          </Box>
        )
      }
      sx={{ mb: drawerOpen ? 1.5 : 0, py: 0, zIndex: 0 }}
    >
      {navCollapse}
    </List>
  );
};

NavGroup.propTypes = {
  item: PropTypes.object
};

export default NavGroup;
