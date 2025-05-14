"use client";

type ErrorProps = {

  error: string;
};

export default function Error({ error }: ErrorProps) {
  /
  return <p>{`Could not fetch the list of notes. ${error.message}`}</p>;
}
