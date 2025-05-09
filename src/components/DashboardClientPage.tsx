'use client';

import { useState, useMemo } from 'react';
import { Container, Form, Row, Col, Dropdown } from 'react-bootstrap';
import { Post } from '@prisma/client';
import FoodPostCard from './FoodPostCard';

export default function DashboardClientPage({ posts }: { posts: Post[] }) {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [search, setSearch] = useState('');

  const filteredSortedPosts = useMemo(() => {
    const searched = posts.filter((post) => post.food.toLowerCase().includes(search.toLowerCase()));

    return searched.sort((a, b) => {
      const diff = a.quantity - b.quantity;
      return sortOrder === 'asc' ? diff : -diff;
    });
  }, [posts, sortOrder, search]);

  return (
    <Container fluid className="py-3 px-3">
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
        {/* Dropdown */}
        <Dropdown onSelect={(val) => setSortOrder(val as 'asc' | 'desc')}>
          <Dropdown.Toggle variant="secondary" className="filter-dropdown">
            Sort by Quantity
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="asc">Lowest to Highest</Dropdown.Item>
            <Dropdown.Item eventKey="desc">Highest to Lowest</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {/* Search Bar */}
        <Form className="flex-grow-1" style={{ maxWidth: 300 }}>
          <Form.Control
            type="text"
            placeholder="Search food..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Form>
      </div>

      <Row xs={1} md={2} lg={3} className="g-4">
        {filteredSortedPosts.map((post) => (
          <Col key={post.id}>
            <FoodPostCard foodpost={post} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
