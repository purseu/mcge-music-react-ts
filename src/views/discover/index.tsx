/**
 *   Copyright (C) 2024 Mcge. All rights reserved.
 *
 * File:           index.tsx
 * Author:         mcge
 * Email:          <mcgeq@outlook.com>
 * Description:
 * Create Date:    2024-05-19 14:23:35
 * Last Modified:  2024-05-19 14:23:35
 *
 */

import { Suspense } from 'react';
import type { FC, ReactNode } from 'react';
import { Link, Outlet } from 'react-router-dom';

interface IProps {
  children?: ReactNode;
}

const Discover: FC<IProps> = () => {
  return (
    <>
      <Link to="/discover/recommend">推荐</Link>
      <Link to="/discover/ranking">排行榜</Link>
      <Link to="/discover/songs">歌单</Link>
      <Link to="/discover/djradio">主播电台</Link>
      <Link to="/discover/artist">歌手</Link>
      <Link to="/discover/album">新碟上架</Link>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Discover;
