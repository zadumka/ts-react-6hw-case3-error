'use client';

type ErrorProps = {
  error: string;
};

export default function Error({ error }: ErrorProps) {
  return <p>{`Could not fetch note details. ${error.message}`}</p>;
}
