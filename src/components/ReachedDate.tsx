import React, { FunctionComponent, useEffect, useState } from 'react';
import moment from 'moment';

type P = {
}

const AOC35thBirthdate: moment.Moment = moment(new Date("2024-10-13"))

const ReachedDate: FunctionComponent<P> = (props) => {
  const [now, setNow] = useState<moment.Moment>(moment(moment.now()))
  useEffect(() => {
    setInterval(() => {
      setNow(moment(moment.now()))
    })
  })

  const interval = now.to(AOC35thBirthdate, true)

  if (now >= AOC35thBirthdate) {
    return (
    <div>
      <p>
        <h1><b>YES!</b></h1>
        and she has been for about {interval}
      </p>
      <p>
        AOC is eligible to be President of the United States!
      </p>
    </div>
    )
  } else {
  return (
    <div>
      <p>
      <h1><b>Not yet</b></h1>
      She'll turn 35 in about {interval}
      </p>
      <p>
      AOC will be eligible to be President of the United States by 2024.
      </p>
    </div>
  )
  }
}

const styles = {
}

export default ReachedDate